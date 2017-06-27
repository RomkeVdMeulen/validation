import { ValueConverter, Conditional, AccessMember, AccessKeyed, CallMember, BindingBehavior, Binary } from 'aurelia-binding';
export declare type Chain = any;
export declare type Assign = any;
export declare type AccessThis = any;
export declare type AccessScope = any;
export declare type CallScope = any;
export declare type CallFunction = any;
export declare type PrefixNot = any;
export declare type LiteralPrimitive = any;
export declare type LiteralArray = any;
export declare type LiteralObject = any;
export declare type LiteralString = any;
export declare class ExpressionVisitor {
    visitChain(chain: Chain): void;
    visitBindingBehavior(behavior: BindingBehavior): void;
    visitValueConverter(converter: ValueConverter): void;
    visitAssign(assign: Assign): void;
    visitConditional(conditional: Conditional): void;
    visitAccessThis(access: AccessThis): void;
    visitAccessScope(access: AccessScope): void;
    visitAccessMember(access: AccessMember): void;
    visitAccessKeyed(access: AccessKeyed): void;
    visitCallScope(call: CallScope): void;
    visitCallFunction(call: CallFunction): void;
    visitCallMember(call: CallMember): void;
    visitPrefix(prefix: PrefixNot): void;
    visitBinary(binary: Binary): void;
    visitLiteralPrimitive(literal: LiteralPrimitive): void;
    visitLiteralArray(literal: LiteralArray): void;
    visitLiteralObject(literal: LiteralObject): void;
    visitLiteralString(literal: LiteralString): void;
    private visitArgs(args);
}
