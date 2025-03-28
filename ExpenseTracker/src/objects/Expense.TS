import { Category } from "./Category.TS";

export class Expense {
    stringId: String;
    name: String;
    origin: String;
    date: Date;
    category: Category
    value: Number;
}