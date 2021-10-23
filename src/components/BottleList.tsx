import { Bottle } from "../model/Bottle";
import { BottleDetail } from "./BottleDetail";

export function BottleList(props: any) {
    return (
        <div>
            {props.bottles.map((bottle: Bottle) =>
                <BottleDetail bottle={bottle} />
            )}
        </div>
    )
}