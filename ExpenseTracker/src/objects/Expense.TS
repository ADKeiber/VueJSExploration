import { Category } from "./Category.ts";

export class Expense {
    stringId: String;
    name: String;
    origin: String;
    date: Date;
    category: Category;
    value: Number;
}