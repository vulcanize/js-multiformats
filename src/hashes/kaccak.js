// @ts-check

import { keccak256 as k } from "ethereum-cryptography/keccak"
import {from} from "./hasher";
import {coerce} from "../bytes";

export const keccak256 = from({
    name: 'keccak-256',
    code: 0x1b,
    encode: (input) => coerce(k(input))
})
