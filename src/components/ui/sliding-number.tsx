"use client";
import { useEffect, useId, useState } from "react";
import {
  MotionValue,
  motion,
  useSpring,
  useTransform,
  motionValue,
} from "motion/react";
import useMeasure from "react-use-measure";

// Add Indian number formatting helper
const formatIndianNumber = (num: number): string => {
  const numStr = Math.abs(num).toString();
  const [intPart, decPart] = numStr.split(".");

  // Handle numbers less than 1000
  if (intPart.length <= 3) {
    return intPart + (decPart ? "." + decPart : "");
  }

  // Format according to Indian numbering system
  let lastThree = intPart.slice(-3);
  let remaining = intPart.slice(0, -3);
  let result = "";

  // Add commas to the remaining digits in groups of 2
  while (remaining.length > 0) {
    result =
      (remaining.length <= 2 ? remaining : "," + remaining.slice(-2)) + result;
    remaining = remaining.slice(0, -2);
  }

  result = result + "," + lastThree;
  // Remove leading comma if present
  result = result.replace(/^,/, "");

  if (decPart) {
    result += "." + decPart;
  }

  return result;
};

const TRANSITION = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.3,
};

function Digit({ value, place }: { value: number; place: number }) {
  const valueRoundedToPlace = Math.floor(value / place) % 10;
  const initial = motionValue(valueRoundedToPlace);
  const animatedValue = useSpring(initial, TRANSITION);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums">
      <div className="invisible">0</div>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue<number>; number: number }) {
  const uniqueId = useId();
  const [ref, bounds] = useMeasure();

  const y = useTransform(mv, (latest) => {
    if (!bounds.height) return 0;
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * bounds.height;

    if (offset > 5) {
      memo -= 10 * bounds.height;
    }

    return memo;
  });

  // don't render the animated number until we know the height
  if (!bounds.height) {
    return (
      <span ref={ref} className="invisible absolute">
        {number}
      </span>
    );
  }

  return (
    <motion.span
      style={{ y }}
      layoutId={`${uniqueId}-${number}`}
      className="absolute inset-0 flex items-center justify-center"
      transition={TRANSITION}
      ref={ref}
    >
      {number}
    </motion.span>
  );
}

type SlidingNumberProps = {
  value: number;
  padStart?: boolean;
  decimalSeparator?: string;
};

export function SlidingNumber({
  value,
  padStart = false,
  decimalSeparator = ".",
}: SlidingNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const steps = 10;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;

      if (step >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const formattedNumber = formatIndianNumber(displayValue);
  const digits = formattedNumber.split("");

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-2xl font-redhat font-bold uppercase">
        Cash Prize
      </div>
      <div className="flex items-center font-chakra text-5xl md:text-9xl font-bold relative text-white">
        {displayValue < 0 && "-"}₹
        {digits.map((digit, index) =>
          digit === "," ? (
            <span key={`separator-${index}`} className="mx-2">
              ,
            </span>
          ) : (
            <Digit
              key={`digit-${index}`}
              value={parseInt(formattedNumber.replace(/,/g, ""), 10)}
              place={Math.pow(
                10,
                formattedNumber.replace(/,/g, "").length -
                  formattedNumber.replace(/,/g, "").indexOf(digit) -
                  1
              )}
            />
          )
        )}
      </div>
    </div>
  );
}
