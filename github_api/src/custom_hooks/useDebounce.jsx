import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 700) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)

        return () => clearTimeout(debounce);
    }, [value])

    console.log(debouncedValue);


    return debouncedValue
}