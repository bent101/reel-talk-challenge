import { useState } from "react";

export function useTop5Selection<T>() {
    const [selected, setSelected] = useState<T[]>([]);

    function toggle(thing: T) {
        if (selected.includes(thing)) {
            setSelected(selected.filter((t) => t !== thing));
        } else if (selected.length < 5) {
            setSelected([...selected, thing]);
        }
    }

    function isSelected(thing: T) {
        return selected.includes(thing);
    }

    return { selected, toggle, isSelected };
}
