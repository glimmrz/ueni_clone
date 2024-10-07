"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "./ui/button";

export const FloatingLabelInput = ({ label, type, ...props }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const inputRef = React.useRef(null);
  const id = React.useId();

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(!!inputRef.current.value);
  };
  const handleChange = (e) => {
    setHasValue(e.target.value !== "");
    props.onChange?.(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        type={showPassword ? "text" : type}
        className={cn("h-14 rounded-md text-foreground peer", props.className)}
        ref={inputRef}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <Label
        htmlFor={id}
        className={cn(
          "capitalize absolute left-3 top-5 text-foreground transition-all duration-200 cursor-text select-none",
          "peer-focus:-translate-y-5 peer-focus:left-0 peer-focus:scale-75 peer-focus:text-sm peer-focus:text-muted-foreground",
          hasValue &&
            "-translate-y-5 left-0 scale-75 text-sm text-muted-foreground"
        )}
      >
        {label}
      </Label>
      {type === "password" && (
        <Button
          type="button"
          onClick={togglePasswordVisibility}
          variant="ghost"
          className="absolute right-3 top-4 text-gray-400 hover:text-gray-300 focus:outline-none min-w-0 py-0 px-0 h-fit hover:bg-transparent"
        >
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </Button>
      )}
    </div>
  );
};
