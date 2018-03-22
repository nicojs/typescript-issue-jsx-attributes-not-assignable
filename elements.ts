/// <reference path="./globals.d.ts" />

type AttributeValue = number | string | Date | boolean;

export interface CustomElementHandler {
    (attributes: Attributes | undefined, contents: string[]): string;
}

export interface Attributes {
    [key: string]: AttributeValue;
}


export function createElement(name: string, attributes: Attributes | undefined, ...contents: string[]) {
    return name;
}