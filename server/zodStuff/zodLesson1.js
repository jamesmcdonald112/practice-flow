"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var PracticeEntrySchema = zod_1.z.object({
    piece: zod_1.z.string(),
    duration: zod_1.z.number()
});
var result = PracticeEntrySchema.safeParse({
    piece: "Moonlight Sonata",
    duration: 10
});
console.log(result);
