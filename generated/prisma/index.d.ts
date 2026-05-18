
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model moto
 * 
 */
export type moto = $Result.DefaultSelection<Prisma.$motoPayload>
/**
 * Model passageiro
 * 
 */
export type passageiro = $Result.DefaultSelection<Prisma.$passageiroPayload>
/**
 * Model taxista
 * 
 */
export type taxista = $Result.DefaultSelection<Prisma.$taxistaPayload>
/**
 * Model viagem
 * 
 */
export type viagem = $Result.DefaultSelection<Prisma.$viagemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const viagem_status: {
  PENDENTE: 'PENDENTE',
  ACEITA: 'ACEITA',
  REJEITADA: 'REJEITADA',
  CONCLUIDA: 'CONCLUIDA',
  CANCELADA: 'CANCELADA'
};

export type viagem_status = (typeof viagem_status)[keyof typeof viagem_status]

}

export type viagem_status = $Enums.viagem_status

export const viagem_status: typeof $Enums.viagem_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Motos
 * const motos = await prisma.moto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Motos
   * const motos = await prisma.moto.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.moto`: Exposes CRUD operations for the **moto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motos
    * const motos = await prisma.moto.findMany()
    * ```
    */
  get moto(): Prisma.motoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passageiro`: Exposes CRUD operations for the **passageiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passageiros
    * const passageiros = await prisma.passageiro.findMany()
    * ```
    */
  get passageiro(): Prisma.passageiroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxista`: Exposes CRUD operations for the **taxista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxistas
    * const taxistas = await prisma.taxista.findMany()
    * ```
    */
  get taxista(): Prisma.taxistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viagem`: Exposes CRUD operations for the **viagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viagems
    * const viagems = await prisma.viagem.findMany()
    * ```
    */
  get viagem(): Prisma.viagemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    moto: 'moto',
    passageiro: 'passageiro',
    taxista: 'taxista',
    viagem: 'viagem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "moto" | "passageiro" | "taxista" | "viagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      moto: {
        payload: Prisma.$motoPayload<ExtArgs>
        fields: Prisma.motoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.motoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.motoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload>
          }
          findFirst: {
            args: Prisma.motoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.motoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload>
          }
          findMany: {
            args: Prisma.motoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload>[]
          }
          create: {
            args: Prisma.motoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload>
          }
          createMany: {
            args: Prisma.motoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.motoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload>[]
          }
          delete: {
            args: Prisma.motoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload>
          }
          update: {
            args: Prisma.motoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload>
          }
          deleteMany: {
            args: Prisma.motoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.motoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.motoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload>[]
          }
          upsert: {
            args: Prisma.motoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$motoPayload>
          }
          aggregate: {
            args: Prisma.MotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoto>
          }
          groupBy: {
            args: Prisma.motoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.motoCountArgs<ExtArgs>
            result: $Utils.Optional<MotoCountAggregateOutputType> | number
          }
        }
      }
      passageiro: {
        payload: Prisma.$passageiroPayload<ExtArgs>
        fields: Prisma.passageiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.passageiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.passageiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload>
          }
          findFirst: {
            args: Prisma.passageiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.passageiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload>
          }
          findMany: {
            args: Prisma.passageiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload>[]
          }
          create: {
            args: Prisma.passageiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload>
          }
          createMany: {
            args: Prisma.passageiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.passageiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload>[]
          }
          delete: {
            args: Prisma.passageiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload>
          }
          update: {
            args: Prisma.passageiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload>
          }
          deleteMany: {
            args: Prisma.passageiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.passageiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.passageiroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload>[]
          }
          upsert: {
            args: Prisma.passageiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passageiroPayload>
          }
          aggregate: {
            args: Prisma.PassageiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassageiro>
          }
          groupBy: {
            args: Prisma.passageiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassageiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.passageiroCountArgs<ExtArgs>
            result: $Utils.Optional<PassageiroCountAggregateOutputType> | number
          }
        }
      }
      taxista: {
        payload: Prisma.$taxistaPayload<ExtArgs>
        fields: Prisma.taxistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taxistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taxistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload>
          }
          findFirst: {
            args: Prisma.taxistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taxistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload>
          }
          findMany: {
            args: Prisma.taxistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload>[]
          }
          create: {
            args: Prisma.taxistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload>
          }
          createMany: {
            args: Prisma.taxistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.taxistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload>[]
          }
          delete: {
            args: Prisma.taxistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload>
          }
          update: {
            args: Prisma.taxistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload>
          }
          deleteMany: {
            args: Prisma.taxistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taxistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.taxistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload>[]
          }
          upsert: {
            args: Prisma.taxistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxistaPayload>
          }
          aggregate: {
            args: Prisma.TaxistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxista>
          }
          groupBy: {
            args: Prisma.taxistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.taxistaCountArgs<ExtArgs>
            result: $Utils.Optional<TaxistaCountAggregateOutputType> | number
          }
        }
      }
      viagem: {
        payload: Prisma.$viagemPayload<ExtArgs>
        fields: Prisma.viagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.viagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.viagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload>
          }
          findFirst: {
            args: Prisma.viagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.viagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload>
          }
          findMany: {
            args: Prisma.viagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload>[]
          }
          create: {
            args: Prisma.viagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload>
          }
          createMany: {
            args: Prisma.viagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.viagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload>[]
          }
          delete: {
            args: Prisma.viagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload>
          }
          update: {
            args: Prisma.viagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload>
          }
          deleteMany: {
            args: Prisma.viagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.viagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.viagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload>[]
          }
          upsert: {
            args: Prisma.viagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viagemPayload>
          }
          aggregate: {
            args: Prisma.ViagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViagem>
          }
          groupBy: {
            args: Prisma.viagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.viagemCountArgs<ExtArgs>
            result: $Utils.Optional<ViagemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    moto?: motoOmit
    passageiro?: passageiroOmit
    taxista?: taxistaOmit
    viagem?: viagemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PassageiroCountOutputType
   */

  export type PassageiroCountOutputType = {
    viagem: number
  }

  export type PassageiroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viagem?: boolean | PassageiroCountOutputTypeCountViagemArgs
  }

  // Custom InputTypes
  /**
   * PassageiroCountOutputType without action
   */
  export type PassageiroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassageiroCountOutputType
     */
    select?: PassageiroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PassageiroCountOutputType without action
   */
  export type PassageiroCountOutputTypeCountViagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viagemWhereInput
  }


  /**
   * Count Type TaxistaCountOutputType
   */

  export type TaxistaCountOutputType = {
    viagem: number
  }

  export type TaxistaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viagem?: boolean | TaxistaCountOutputTypeCountViagemArgs
  }

  // Custom InputTypes
  /**
   * TaxistaCountOutputType without action
   */
  export type TaxistaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaxistaCountOutputType
     */
    select?: TaxistaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaxistaCountOutputType without action
   */
  export type TaxistaCountOutputTypeCountViagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viagemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model moto
   */

  export type AggregateMoto = {
    _count: MotoCountAggregateOutputType | null
    _min: MotoMinAggregateOutputType | null
    _max: MotoMaxAggregateOutputType | null
  }

  export type MotoMinAggregateOutputType = {
    id: string | null
    nomeMoto: string | null
    matricula: string | null
    criadoEm: Date | null
    taxistaId: string | null
  }

  export type MotoMaxAggregateOutputType = {
    id: string | null
    nomeMoto: string | null
    matricula: string | null
    criadoEm: Date | null
    taxistaId: string | null
  }

  export type MotoCountAggregateOutputType = {
    id: number
    nomeMoto: number
    matricula: number
    criadoEm: number
    taxistaId: number
    _all: number
  }


  export type MotoMinAggregateInputType = {
    id?: true
    nomeMoto?: true
    matricula?: true
    criadoEm?: true
    taxistaId?: true
  }

  export type MotoMaxAggregateInputType = {
    id?: true
    nomeMoto?: true
    matricula?: true
    criadoEm?: true
    taxistaId?: true
  }

  export type MotoCountAggregateInputType = {
    id?: true
    nomeMoto?: true
    matricula?: true
    criadoEm?: true
    taxistaId?: true
    _all?: true
  }

  export type MotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which moto to aggregate.
     */
    where?: motoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of motos to fetch.
     */
    orderBy?: motoOrderByWithRelationInput | motoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: motoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` motos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` motos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned motos
    **/
    _count?: true | MotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotoMaxAggregateInputType
  }

  export type GetMotoAggregateType<T extends MotoAggregateArgs> = {
        [P in keyof T & keyof AggregateMoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoto[P]>
      : GetScalarType<T[P], AggregateMoto[P]>
  }




  export type motoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: motoWhereInput
    orderBy?: motoOrderByWithAggregationInput | motoOrderByWithAggregationInput[]
    by: MotoScalarFieldEnum[] | MotoScalarFieldEnum
    having?: motoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotoCountAggregateInputType | true
    _min?: MotoMinAggregateInputType
    _max?: MotoMaxAggregateInputType
  }

  export type MotoGroupByOutputType = {
    id: string
    nomeMoto: string
    matricula: string
    criadoEm: Date
    taxistaId: string
    _count: MotoCountAggregateOutputType | null
    _min: MotoMinAggregateOutputType | null
    _max: MotoMaxAggregateOutputType | null
  }

  type GetMotoGroupByPayload<T extends motoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotoGroupByOutputType[P]>
            : GetScalarType<T[P], MotoGroupByOutputType[P]>
        }
      >
    >


  export type motoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeMoto?: boolean
    matricula?: boolean
    criadoEm?: boolean
    taxistaId?: boolean
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moto"]>

  export type motoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeMoto?: boolean
    matricula?: boolean
    criadoEm?: boolean
    taxistaId?: boolean
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moto"]>

  export type motoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeMoto?: boolean
    matricula?: boolean
    criadoEm?: boolean
    taxistaId?: boolean
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moto"]>

  export type motoSelectScalar = {
    id?: boolean
    nomeMoto?: boolean
    matricula?: boolean
    criadoEm?: boolean
    taxistaId?: boolean
  }

  export type motoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeMoto" | "matricula" | "criadoEm" | "taxistaId", ExtArgs["result"]["moto"]>
  export type motoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }
  export type motoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }
  export type motoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }

  export type $motoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "moto"
    objects: {
      taxista: Prisma.$taxistaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeMoto: string
      matricula: string
      criadoEm: Date
      taxistaId: string
    }, ExtArgs["result"]["moto"]>
    composites: {}
  }

  type motoGetPayload<S extends boolean | null | undefined | motoDefaultArgs> = $Result.GetResult<Prisma.$motoPayload, S>

  type motoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<motoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotoCountAggregateInputType | true
    }

  export interface motoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['moto'], meta: { name: 'moto' } }
    /**
     * Find zero or one Moto that matches the filter.
     * @param {motoFindUniqueArgs} args - Arguments to find a Moto
     * @example
     * // Get one Moto
     * const moto = await prisma.moto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends motoFindUniqueArgs>(args: SelectSubset<T, motoFindUniqueArgs<ExtArgs>>): Prisma__motoClient<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Moto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {motoFindUniqueOrThrowArgs} args - Arguments to find a Moto
     * @example
     * // Get one Moto
     * const moto = await prisma.moto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends motoFindUniqueOrThrowArgs>(args: SelectSubset<T, motoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__motoClient<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoFindFirstArgs} args - Arguments to find a Moto
     * @example
     * // Get one Moto
     * const moto = await prisma.moto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends motoFindFirstArgs>(args?: SelectSubset<T, motoFindFirstArgs<ExtArgs>>): Prisma__motoClient<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoFindFirstOrThrowArgs} args - Arguments to find a Moto
     * @example
     * // Get one Moto
     * const moto = await prisma.moto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends motoFindFirstOrThrowArgs>(args?: SelectSubset<T, motoFindFirstOrThrowArgs<ExtArgs>>): Prisma__motoClient<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Motos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motos
     * const motos = await prisma.moto.findMany()
     * 
     * // Get first 10 Motos
     * const motos = await prisma.moto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motoWithIdOnly = await prisma.moto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends motoFindManyArgs>(args?: SelectSubset<T, motoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Moto.
     * @param {motoCreateArgs} args - Arguments to create a Moto.
     * @example
     * // Create one Moto
     * const Moto = await prisma.moto.create({
     *   data: {
     *     // ... data to create a Moto
     *   }
     * })
     * 
     */
    create<T extends motoCreateArgs>(args: SelectSubset<T, motoCreateArgs<ExtArgs>>): Prisma__motoClient<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Motos.
     * @param {motoCreateManyArgs} args - Arguments to create many Motos.
     * @example
     * // Create many Motos
     * const moto = await prisma.moto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends motoCreateManyArgs>(args?: SelectSubset<T, motoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Motos and returns the data saved in the database.
     * @param {motoCreateManyAndReturnArgs} args - Arguments to create many Motos.
     * @example
     * // Create many Motos
     * const moto = await prisma.moto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Motos and only return the `id`
     * const motoWithIdOnly = await prisma.moto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends motoCreateManyAndReturnArgs>(args?: SelectSubset<T, motoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Moto.
     * @param {motoDeleteArgs} args - Arguments to delete one Moto.
     * @example
     * // Delete one Moto
     * const Moto = await prisma.moto.delete({
     *   where: {
     *     // ... filter to delete one Moto
     *   }
     * })
     * 
     */
    delete<T extends motoDeleteArgs>(args: SelectSubset<T, motoDeleteArgs<ExtArgs>>): Prisma__motoClient<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Moto.
     * @param {motoUpdateArgs} args - Arguments to update one Moto.
     * @example
     * // Update one Moto
     * const moto = await prisma.moto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends motoUpdateArgs>(args: SelectSubset<T, motoUpdateArgs<ExtArgs>>): Prisma__motoClient<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Motos.
     * @param {motoDeleteManyArgs} args - Arguments to filter Motos to delete.
     * @example
     * // Delete a few Motos
     * const { count } = await prisma.moto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends motoDeleteManyArgs>(args?: SelectSubset<T, motoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motos
     * const moto = await prisma.moto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends motoUpdateManyArgs>(args: SelectSubset<T, motoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motos and returns the data updated in the database.
     * @param {motoUpdateManyAndReturnArgs} args - Arguments to update many Motos.
     * @example
     * // Update many Motos
     * const moto = await prisma.moto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Motos and only return the `id`
     * const motoWithIdOnly = await prisma.moto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends motoUpdateManyAndReturnArgs>(args: SelectSubset<T, motoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Moto.
     * @param {motoUpsertArgs} args - Arguments to update or create a Moto.
     * @example
     * // Update or create a Moto
     * const moto = await prisma.moto.upsert({
     *   create: {
     *     // ... data to create a Moto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Moto we want to update
     *   }
     * })
     */
    upsert<T extends motoUpsertArgs>(args: SelectSubset<T, motoUpsertArgs<ExtArgs>>): Prisma__motoClient<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Motos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoCountArgs} args - Arguments to filter Motos to count.
     * @example
     * // Count the number of Motos
     * const count = await prisma.moto.count({
     *   where: {
     *     // ... the filter for the Motos we want to count
     *   }
     * })
    **/
    count<T extends motoCountArgs>(
      args?: Subset<T, motoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Moto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MotoAggregateArgs>(args: Subset<T, MotoAggregateArgs>): Prisma.PrismaPromise<GetMotoAggregateType<T>>

    /**
     * Group by Moto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {motoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends motoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: motoGroupByArgs['orderBy'] }
        : { orderBy?: motoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, motoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the moto model
   */
  readonly fields: motoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for moto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__motoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taxista<T extends taxistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, taxistaDefaultArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the moto model
   */
  interface motoFieldRefs {
    readonly id: FieldRef<"moto", 'String'>
    readonly nomeMoto: FieldRef<"moto", 'String'>
    readonly matricula: FieldRef<"moto", 'String'>
    readonly criadoEm: FieldRef<"moto", 'DateTime'>
    readonly taxistaId: FieldRef<"moto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * moto findUnique
   */
  export type motoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    /**
     * Filter, which moto to fetch.
     */
    where: motoWhereUniqueInput
  }

  /**
   * moto findUniqueOrThrow
   */
  export type motoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    /**
     * Filter, which moto to fetch.
     */
    where: motoWhereUniqueInput
  }

  /**
   * moto findFirst
   */
  export type motoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    /**
     * Filter, which moto to fetch.
     */
    where?: motoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of motos to fetch.
     */
    orderBy?: motoOrderByWithRelationInput | motoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for motos.
     */
    cursor?: motoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` motos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` motos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of motos.
     */
    distinct?: MotoScalarFieldEnum | MotoScalarFieldEnum[]
  }

  /**
   * moto findFirstOrThrow
   */
  export type motoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    /**
     * Filter, which moto to fetch.
     */
    where?: motoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of motos to fetch.
     */
    orderBy?: motoOrderByWithRelationInput | motoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for motos.
     */
    cursor?: motoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` motos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` motos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of motos.
     */
    distinct?: MotoScalarFieldEnum | MotoScalarFieldEnum[]
  }

  /**
   * moto findMany
   */
  export type motoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    /**
     * Filter, which motos to fetch.
     */
    where?: motoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of motos to fetch.
     */
    orderBy?: motoOrderByWithRelationInput | motoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing motos.
     */
    cursor?: motoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` motos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` motos.
     */
    skip?: number
    distinct?: MotoScalarFieldEnum | MotoScalarFieldEnum[]
  }

  /**
   * moto create
   */
  export type motoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    /**
     * The data needed to create a moto.
     */
    data: XOR<motoCreateInput, motoUncheckedCreateInput>
  }

  /**
   * moto createMany
   */
  export type motoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many motos.
     */
    data: motoCreateManyInput | motoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * moto createManyAndReturn
   */
  export type motoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * The data used to create many motos.
     */
    data: motoCreateManyInput | motoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * moto update
   */
  export type motoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    /**
     * The data needed to update a moto.
     */
    data: XOR<motoUpdateInput, motoUncheckedUpdateInput>
    /**
     * Choose, which moto to update.
     */
    where: motoWhereUniqueInput
  }

  /**
   * moto updateMany
   */
  export type motoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update motos.
     */
    data: XOR<motoUpdateManyMutationInput, motoUncheckedUpdateManyInput>
    /**
     * Filter which motos to update
     */
    where?: motoWhereInput
    /**
     * Limit how many motos to update.
     */
    limit?: number
  }

  /**
   * moto updateManyAndReturn
   */
  export type motoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * The data used to update motos.
     */
    data: XOR<motoUpdateManyMutationInput, motoUncheckedUpdateManyInput>
    /**
     * Filter which motos to update
     */
    where?: motoWhereInput
    /**
     * Limit how many motos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * moto upsert
   */
  export type motoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    /**
     * The filter to search for the moto to update in case it exists.
     */
    where: motoWhereUniqueInput
    /**
     * In case the moto found by the `where` argument doesn't exist, create a new moto with this data.
     */
    create: XOR<motoCreateInput, motoUncheckedCreateInput>
    /**
     * In case the moto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<motoUpdateInput, motoUncheckedUpdateInput>
  }

  /**
   * moto delete
   */
  export type motoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    /**
     * Filter which moto to delete.
     */
    where: motoWhereUniqueInput
  }

  /**
   * moto deleteMany
   */
  export type motoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which motos to delete
     */
    where?: motoWhereInput
    /**
     * Limit how many motos to delete.
     */
    limit?: number
  }

  /**
   * moto without action
   */
  export type motoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
  }


  /**
   * Model passageiro
   */

  export type AggregatePassageiro = {
    _count: PassageiroCountAggregateOutputType | null
    _min: PassageiroMinAggregateOutputType | null
    _max: PassageiroMaxAggregateOutputType | null
  }

  export type PassageiroMinAggregateOutputType = {
    id: string | null
    nome: string | null
    apelido: string | null
    documento: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type PassageiroMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    apelido: string | null
    documento: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type PassageiroCountAggregateOutputType = {
    id: number
    nome: number
    apelido: number
    documento: number
    email: number
    senha: number
    criadoEm: number
    _all: number
  }


  export type PassageiroMinAggregateInputType = {
    id?: true
    nome?: true
    apelido?: true
    documento?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type PassageiroMaxAggregateInputType = {
    id?: true
    nome?: true
    apelido?: true
    documento?: true
    email?: true
    senha?: true
    criadoEm?: true
  }

  export type PassageiroCountAggregateInputType = {
    id?: true
    nome?: true
    apelido?: true
    documento?: true
    email?: true
    senha?: true
    criadoEm?: true
    _all?: true
  }

  export type PassageiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passageiro to aggregate.
     */
    where?: passageiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passageiros to fetch.
     */
    orderBy?: passageiroOrderByWithRelationInput | passageiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: passageiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passageiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passageiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned passageiros
    **/
    _count?: true | PassageiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassageiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassageiroMaxAggregateInputType
  }

  export type GetPassageiroAggregateType<T extends PassageiroAggregateArgs> = {
        [P in keyof T & keyof AggregatePassageiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassageiro[P]>
      : GetScalarType<T[P], AggregatePassageiro[P]>
  }




  export type passageiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: passageiroWhereInput
    orderBy?: passageiroOrderByWithAggregationInput | passageiroOrderByWithAggregationInput[]
    by: PassageiroScalarFieldEnum[] | PassageiroScalarFieldEnum
    having?: passageiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassageiroCountAggregateInputType | true
    _min?: PassageiroMinAggregateInputType
    _max?: PassageiroMaxAggregateInputType
  }

  export type PassageiroGroupByOutputType = {
    id: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm: Date
    _count: PassageiroCountAggregateOutputType | null
    _min: PassageiroMinAggregateOutputType | null
    _max: PassageiroMaxAggregateOutputType | null
  }

  type GetPassageiroGroupByPayload<T extends passageiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassageiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassageiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassageiroGroupByOutputType[P]>
            : GetScalarType<T[P], PassageiroGroupByOutputType[P]>
        }
      >
    >


  export type passageiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    apelido?: boolean
    documento?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    viagem?: boolean | passageiro$viagemArgs<ExtArgs>
    _count?: boolean | PassageiroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passageiro"]>

  export type passageiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    apelido?: boolean
    documento?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["passageiro"]>

  export type passageiroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    apelido?: boolean
    documento?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["passageiro"]>

  export type passageiroSelectScalar = {
    id?: boolean
    nome?: boolean
    apelido?: boolean
    documento?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
  }

  export type passageiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "apelido" | "documento" | "email" | "senha" | "criadoEm", ExtArgs["result"]["passageiro"]>
  export type passageiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viagem?: boolean | passageiro$viagemArgs<ExtArgs>
    _count?: boolean | PassageiroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type passageiroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type passageiroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $passageiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "passageiro"
    objects: {
      viagem: Prisma.$viagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      apelido: string
      documento: string
      email: string
      senha: string
      criadoEm: Date
    }, ExtArgs["result"]["passageiro"]>
    composites: {}
  }

  type passageiroGetPayload<S extends boolean | null | undefined | passageiroDefaultArgs> = $Result.GetResult<Prisma.$passageiroPayload, S>

  type passageiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<passageiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassageiroCountAggregateInputType | true
    }

  export interface passageiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['passageiro'], meta: { name: 'passageiro' } }
    /**
     * Find zero or one Passageiro that matches the filter.
     * @param {passageiroFindUniqueArgs} args - Arguments to find a Passageiro
     * @example
     * // Get one Passageiro
     * const passageiro = await prisma.passageiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends passageiroFindUniqueArgs>(args: SelectSubset<T, passageiroFindUniqueArgs<ExtArgs>>): Prisma__passageiroClient<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passageiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {passageiroFindUniqueOrThrowArgs} args - Arguments to find a Passageiro
     * @example
     * // Get one Passageiro
     * const passageiro = await prisma.passageiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends passageiroFindUniqueOrThrowArgs>(args: SelectSubset<T, passageiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__passageiroClient<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passageiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passageiroFindFirstArgs} args - Arguments to find a Passageiro
     * @example
     * // Get one Passageiro
     * const passageiro = await prisma.passageiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends passageiroFindFirstArgs>(args?: SelectSubset<T, passageiroFindFirstArgs<ExtArgs>>): Prisma__passageiroClient<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passageiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passageiroFindFirstOrThrowArgs} args - Arguments to find a Passageiro
     * @example
     * // Get one Passageiro
     * const passageiro = await prisma.passageiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends passageiroFindFirstOrThrowArgs>(args?: SelectSubset<T, passageiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__passageiroClient<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passageiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passageiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passageiros
     * const passageiros = await prisma.passageiro.findMany()
     * 
     * // Get first 10 Passageiros
     * const passageiros = await prisma.passageiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passageiroWithIdOnly = await prisma.passageiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends passageiroFindManyArgs>(args?: SelectSubset<T, passageiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passageiro.
     * @param {passageiroCreateArgs} args - Arguments to create a Passageiro.
     * @example
     * // Create one Passageiro
     * const Passageiro = await prisma.passageiro.create({
     *   data: {
     *     // ... data to create a Passageiro
     *   }
     * })
     * 
     */
    create<T extends passageiroCreateArgs>(args: SelectSubset<T, passageiroCreateArgs<ExtArgs>>): Prisma__passageiroClient<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passageiros.
     * @param {passageiroCreateManyArgs} args - Arguments to create many Passageiros.
     * @example
     * // Create many Passageiros
     * const passageiro = await prisma.passageiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends passageiroCreateManyArgs>(args?: SelectSubset<T, passageiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passageiros and returns the data saved in the database.
     * @param {passageiroCreateManyAndReturnArgs} args - Arguments to create many Passageiros.
     * @example
     * // Create many Passageiros
     * const passageiro = await prisma.passageiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passageiros and only return the `id`
     * const passageiroWithIdOnly = await prisma.passageiro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends passageiroCreateManyAndReturnArgs>(args?: SelectSubset<T, passageiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passageiro.
     * @param {passageiroDeleteArgs} args - Arguments to delete one Passageiro.
     * @example
     * // Delete one Passageiro
     * const Passageiro = await prisma.passageiro.delete({
     *   where: {
     *     // ... filter to delete one Passageiro
     *   }
     * })
     * 
     */
    delete<T extends passageiroDeleteArgs>(args: SelectSubset<T, passageiroDeleteArgs<ExtArgs>>): Prisma__passageiroClient<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passageiro.
     * @param {passageiroUpdateArgs} args - Arguments to update one Passageiro.
     * @example
     * // Update one Passageiro
     * const passageiro = await prisma.passageiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends passageiroUpdateArgs>(args: SelectSubset<T, passageiroUpdateArgs<ExtArgs>>): Prisma__passageiroClient<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passageiros.
     * @param {passageiroDeleteManyArgs} args - Arguments to filter Passageiros to delete.
     * @example
     * // Delete a few Passageiros
     * const { count } = await prisma.passageiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends passageiroDeleteManyArgs>(args?: SelectSubset<T, passageiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passageiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passageiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passageiros
     * const passageiro = await prisma.passageiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends passageiroUpdateManyArgs>(args: SelectSubset<T, passageiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passageiros and returns the data updated in the database.
     * @param {passageiroUpdateManyAndReturnArgs} args - Arguments to update many Passageiros.
     * @example
     * // Update many Passageiros
     * const passageiro = await prisma.passageiro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passageiros and only return the `id`
     * const passageiroWithIdOnly = await prisma.passageiro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends passageiroUpdateManyAndReturnArgs>(args: SelectSubset<T, passageiroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passageiro.
     * @param {passageiroUpsertArgs} args - Arguments to update or create a Passageiro.
     * @example
     * // Update or create a Passageiro
     * const passageiro = await prisma.passageiro.upsert({
     *   create: {
     *     // ... data to create a Passageiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passageiro we want to update
     *   }
     * })
     */
    upsert<T extends passageiroUpsertArgs>(args: SelectSubset<T, passageiroUpsertArgs<ExtArgs>>): Prisma__passageiroClient<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passageiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passageiroCountArgs} args - Arguments to filter Passageiros to count.
     * @example
     * // Count the number of Passageiros
     * const count = await prisma.passageiro.count({
     *   where: {
     *     // ... the filter for the Passageiros we want to count
     *   }
     * })
    **/
    count<T extends passageiroCountArgs>(
      args?: Subset<T, passageiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassageiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passageiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassageiroAggregateArgs>(args: Subset<T, PassageiroAggregateArgs>): Prisma.PrismaPromise<GetPassageiroAggregateType<T>>

    /**
     * Group by Passageiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passageiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends passageiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: passageiroGroupByArgs['orderBy'] }
        : { orderBy?: passageiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, passageiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassageiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the passageiro model
   */
  readonly fields: passageiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for passageiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__passageiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    viagem<T extends passageiro$viagemArgs<ExtArgs> = {}>(args?: Subset<T, passageiro$viagemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the passageiro model
   */
  interface passageiroFieldRefs {
    readonly id: FieldRef<"passageiro", 'String'>
    readonly nome: FieldRef<"passageiro", 'String'>
    readonly apelido: FieldRef<"passageiro", 'String'>
    readonly documento: FieldRef<"passageiro", 'String'>
    readonly email: FieldRef<"passageiro", 'String'>
    readonly senha: FieldRef<"passageiro", 'String'>
    readonly criadoEm: FieldRef<"passageiro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * passageiro findUnique
   */
  export type passageiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
    /**
     * Filter, which passageiro to fetch.
     */
    where: passageiroWhereUniqueInput
  }

  /**
   * passageiro findUniqueOrThrow
   */
  export type passageiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
    /**
     * Filter, which passageiro to fetch.
     */
    where: passageiroWhereUniqueInput
  }

  /**
   * passageiro findFirst
   */
  export type passageiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
    /**
     * Filter, which passageiro to fetch.
     */
    where?: passageiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passageiros to fetch.
     */
    orderBy?: passageiroOrderByWithRelationInput | passageiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passageiros.
     */
    cursor?: passageiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passageiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passageiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passageiros.
     */
    distinct?: PassageiroScalarFieldEnum | PassageiroScalarFieldEnum[]
  }

  /**
   * passageiro findFirstOrThrow
   */
  export type passageiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
    /**
     * Filter, which passageiro to fetch.
     */
    where?: passageiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passageiros to fetch.
     */
    orderBy?: passageiroOrderByWithRelationInput | passageiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passageiros.
     */
    cursor?: passageiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passageiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passageiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passageiros.
     */
    distinct?: PassageiroScalarFieldEnum | PassageiroScalarFieldEnum[]
  }

  /**
   * passageiro findMany
   */
  export type passageiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
    /**
     * Filter, which passageiros to fetch.
     */
    where?: passageiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passageiros to fetch.
     */
    orderBy?: passageiroOrderByWithRelationInput | passageiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing passageiros.
     */
    cursor?: passageiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passageiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passageiros.
     */
    skip?: number
    distinct?: PassageiroScalarFieldEnum | PassageiroScalarFieldEnum[]
  }

  /**
   * passageiro create
   */
  export type passageiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
    /**
     * The data needed to create a passageiro.
     */
    data: XOR<passageiroCreateInput, passageiroUncheckedCreateInput>
  }

  /**
   * passageiro createMany
   */
  export type passageiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many passageiros.
     */
    data: passageiroCreateManyInput | passageiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * passageiro createManyAndReturn
   */
  export type passageiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * The data used to create many passageiros.
     */
    data: passageiroCreateManyInput | passageiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * passageiro update
   */
  export type passageiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
    /**
     * The data needed to update a passageiro.
     */
    data: XOR<passageiroUpdateInput, passageiroUncheckedUpdateInput>
    /**
     * Choose, which passageiro to update.
     */
    where: passageiroWhereUniqueInput
  }

  /**
   * passageiro updateMany
   */
  export type passageiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update passageiros.
     */
    data: XOR<passageiroUpdateManyMutationInput, passageiroUncheckedUpdateManyInput>
    /**
     * Filter which passageiros to update
     */
    where?: passageiroWhereInput
    /**
     * Limit how many passageiros to update.
     */
    limit?: number
  }

  /**
   * passageiro updateManyAndReturn
   */
  export type passageiroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * The data used to update passageiros.
     */
    data: XOR<passageiroUpdateManyMutationInput, passageiroUncheckedUpdateManyInput>
    /**
     * Filter which passageiros to update
     */
    where?: passageiroWhereInput
    /**
     * Limit how many passageiros to update.
     */
    limit?: number
  }

  /**
   * passageiro upsert
   */
  export type passageiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
    /**
     * The filter to search for the passageiro to update in case it exists.
     */
    where: passageiroWhereUniqueInput
    /**
     * In case the passageiro found by the `where` argument doesn't exist, create a new passageiro with this data.
     */
    create: XOR<passageiroCreateInput, passageiroUncheckedCreateInput>
    /**
     * In case the passageiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<passageiroUpdateInput, passageiroUncheckedUpdateInput>
  }

  /**
   * passageiro delete
   */
  export type passageiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
    /**
     * Filter which passageiro to delete.
     */
    where: passageiroWhereUniqueInput
  }

  /**
   * passageiro deleteMany
   */
  export type passageiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passageiros to delete
     */
    where?: passageiroWhereInput
    /**
     * Limit how many passageiros to delete.
     */
    limit?: number
  }

  /**
   * passageiro.viagem
   */
  export type passageiro$viagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    where?: viagemWhereInput
    orderBy?: viagemOrderByWithRelationInput | viagemOrderByWithRelationInput[]
    cursor?: viagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * passageiro without action
   */
  export type passageiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passageiro
     */
    select?: passageiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passageiro
     */
    omit?: passageiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passageiroInclude<ExtArgs> | null
  }


  /**
   * Model taxista
   */

  export type AggregateTaxista = {
    _count: TaxistaCountAggregateOutputType | null
    _avg: TaxistaAvgAggregateOutputType | null
    _sum: TaxistaSumAggregateOutputType | null
    _min: TaxistaMinAggregateOutputType | null
    _max: TaxistaMaxAggregateOutputType | null
  }

  export type TaxistaAvgAggregateOutputType = {
    accuracy: number | null
    lat: number | null
    lng: number | null
  }

  export type TaxistaSumAggregateOutputType = {
    accuracy: number | null
    lat: number | null
    lng: number | null
  }

  export type TaxistaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    apelido: string | null
    documento: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
    disponivel: boolean | null
    accuracy: number | null
    lastGpsAt: Date | null
    lat: number | null
    lng: number | null
  }

  export type TaxistaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    apelido: string | null
    documento: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
    disponivel: boolean | null
    accuracy: number | null
    lastGpsAt: Date | null
    lat: number | null
    lng: number | null
  }

  export type TaxistaCountAggregateOutputType = {
    id: number
    nome: number
    apelido: number
    documento: number
    email: number
    senha: number
    criadoEm: number
    disponivel: number
    accuracy: number
    lastGpsAt: number
    lat: number
    lng: number
    _all: number
  }


  export type TaxistaAvgAggregateInputType = {
    accuracy?: true
    lat?: true
    lng?: true
  }

  export type TaxistaSumAggregateInputType = {
    accuracy?: true
    lat?: true
    lng?: true
  }

  export type TaxistaMinAggregateInputType = {
    id?: true
    nome?: true
    apelido?: true
    documento?: true
    email?: true
    senha?: true
    criadoEm?: true
    disponivel?: true
    accuracy?: true
    lastGpsAt?: true
    lat?: true
    lng?: true
  }

  export type TaxistaMaxAggregateInputType = {
    id?: true
    nome?: true
    apelido?: true
    documento?: true
    email?: true
    senha?: true
    criadoEm?: true
    disponivel?: true
    accuracy?: true
    lastGpsAt?: true
    lat?: true
    lng?: true
  }

  export type TaxistaCountAggregateInputType = {
    id?: true
    nome?: true
    apelido?: true
    documento?: true
    email?: true
    senha?: true
    criadoEm?: true
    disponivel?: true
    accuracy?: true
    lastGpsAt?: true
    lat?: true
    lng?: true
    _all?: true
  }

  export type TaxistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taxista to aggregate.
     */
    where?: taxistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxistas to fetch.
     */
    orderBy?: taxistaOrderByWithRelationInput | taxistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taxistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned taxistas
    **/
    _count?: true | TaxistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxistaMaxAggregateInputType
  }

  export type GetTaxistaAggregateType<T extends TaxistaAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxista[P]>
      : GetScalarType<T[P], AggregateTaxista[P]>
  }




  export type taxistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taxistaWhereInput
    orderBy?: taxistaOrderByWithAggregationInput | taxistaOrderByWithAggregationInput[]
    by: TaxistaScalarFieldEnum[] | TaxistaScalarFieldEnum
    having?: taxistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxistaCountAggregateInputType | true
    _avg?: TaxistaAvgAggregateInputType
    _sum?: TaxistaSumAggregateInputType
    _min?: TaxistaMinAggregateInputType
    _max?: TaxistaMaxAggregateInputType
  }

  export type TaxistaGroupByOutputType = {
    id: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm: Date
    disponivel: boolean
    accuracy: number | null
    lastGpsAt: Date | null
    lat: number | null
    lng: number | null
    _count: TaxistaCountAggregateOutputType | null
    _avg: TaxistaAvgAggregateOutputType | null
    _sum: TaxistaSumAggregateOutputType | null
    _min: TaxistaMinAggregateOutputType | null
    _max: TaxistaMaxAggregateOutputType | null
  }

  type GetTaxistaGroupByPayload<T extends taxistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxistaGroupByOutputType[P]>
            : GetScalarType<T[P], TaxistaGroupByOutputType[P]>
        }
      >
    >


  export type taxistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    apelido?: boolean
    documento?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    disponivel?: boolean
    accuracy?: boolean
    lastGpsAt?: boolean
    lat?: boolean
    lng?: boolean
    moto?: boolean | taxista$motoArgs<ExtArgs>
    viagem?: boolean | taxista$viagemArgs<ExtArgs>
    _count?: boolean | TaxistaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxista"]>

  export type taxistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    apelido?: boolean
    documento?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    disponivel?: boolean
    accuracy?: boolean
    lastGpsAt?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["taxista"]>

  export type taxistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    apelido?: boolean
    documento?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    disponivel?: boolean
    accuracy?: boolean
    lastGpsAt?: boolean
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["taxista"]>

  export type taxistaSelectScalar = {
    id?: boolean
    nome?: boolean
    apelido?: boolean
    documento?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    disponivel?: boolean
    accuracy?: boolean
    lastGpsAt?: boolean
    lat?: boolean
    lng?: boolean
  }

  export type taxistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "apelido" | "documento" | "email" | "senha" | "criadoEm" | "disponivel" | "accuracy" | "lastGpsAt" | "lat" | "lng", ExtArgs["result"]["taxista"]>
  export type taxistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moto?: boolean | taxista$motoArgs<ExtArgs>
    viagem?: boolean | taxista$viagemArgs<ExtArgs>
    _count?: boolean | TaxistaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type taxistaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type taxistaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $taxistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "taxista"
    objects: {
      moto: Prisma.$motoPayload<ExtArgs> | null
      viagem: Prisma.$viagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      apelido: string
      documento: string
      email: string
      senha: string
      criadoEm: Date
      disponivel: boolean
      accuracy: number | null
      lastGpsAt: Date | null
      lat: number | null
      lng: number | null
    }, ExtArgs["result"]["taxista"]>
    composites: {}
  }

  type taxistaGetPayload<S extends boolean | null | undefined | taxistaDefaultArgs> = $Result.GetResult<Prisma.$taxistaPayload, S>

  type taxistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taxistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxistaCountAggregateInputType | true
    }

  export interface taxistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['taxista'], meta: { name: 'taxista' } }
    /**
     * Find zero or one Taxista that matches the filter.
     * @param {taxistaFindUniqueArgs} args - Arguments to find a Taxista
     * @example
     * // Get one Taxista
     * const taxista = await prisma.taxista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taxistaFindUniqueArgs>(args: SelectSubset<T, taxistaFindUniqueArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taxista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taxistaFindUniqueOrThrowArgs} args - Arguments to find a Taxista
     * @example
     * // Get one Taxista
     * const taxista = await prisma.taxista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taxistaFindUniqueOrThrowArgs>(args: SelectSubset<T, taxistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taxista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxistaFindFirstArgs} args - Arguments to find a Taxista
     * @example
     * // Get one Taxista
     * const taxista = await prisma.taxista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taxistaFindFirstArgs>(args?: SelectSubset<T, taxistaFindFirstArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taxista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxistaFindFirstOrThrowArgs} args - Arguments to find a Taxista
     * @example
     * // Get one Taxista
     * const taxista = await prisma.taxista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taxistaFindFirstOrThrowArgs>(args?: SelectSubset<T, taxistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taxistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxistas
     * const taxistas = await prisma.taxista.findMany()
     * 
     * // Get first 10 Taxistas
     * const taxistas = await prisma.taxista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxistaWithIdOnly = await prisma.taxista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taxistaFindManyArgs>(args?: SelectSubset<T, taxistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taxista.
     * @param {taxistaCreateArgs} args - Arguments to create a Taxista.
     * @example
     * // Create one Taxista
     * const Taxista = await prisma.taxista.create({
     *   data: {
     *     // ... data to create a Taxista
     *   }
     * })
     * 
     */
    create<T extends taxistaCreateArgs>(args: SelectSubset<T, taxistaCreateArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taxistas.
     * @param {taxistaCreateManyArgs} args - Arguments to create many Taxistas.
     * @example
     * // Create many Taxistas
     * const taxista = await prisma.taxista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taxistaCreateManyArgs>(args?: SelectSubset<T, taxistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Taxistas and returns the data saved in the database.
     * @param {taxistaCreateManyAndReturnArgs} args - Arguments to create many Taxistas.
     * @example
     * // Create many Taxistas
     * const taxista = await prisma.taxista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Taxistas and only return the `id`
     * const taxistaWithIdOnly = await prisma.taxista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends taxistaCreateManyAndReturnArgs>(args?: SelectSubset<T, taxistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Taxista.
     * @param {taxistaDeleteArgs} args - Arguments to delete one Taxista.
     * @example
     * // Delete one Taxista
     * const Taxista = await prisma.taxista.delete({
     *   where: {
     *     // ... filter to delete one Taxista
     *   }
     * })
     * 
     */
    delete<T extends taxistaDeleteArgs>(args: SelectSubset<T, taxistaDeleteArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taxista.
     * @param {taxistaUpdateArgs} args - Arguments to update one Taxista.
     * @example
     * // Update one Taxista
     * const taxista = await prisma.taxista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taxistaUpdateArgs>(args: SelectSubset<T, taxistaUpdateArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taxistas.
     * @param {taxistaDeleteManyArgs} args - Arguments to filter Taxistas to delete.
     * @example
     * // Delete a few Taxistas
     * const { count } = await prisma.taxista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taxistaDeleteManyArgs>(args?: SelectSubset<T, taxistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxistas
     * const taxista = await prisma.taxista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taxistaUpdateManyArgs>(args: SelectSubset<T, taxistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxistas and returns the data updated in the database.
     * @param {taxistaUpdateManyAndReturnArgs} args - Arguments to update many Taxistas.
     * @example
     * // Update many Taxistas
     * const taxista = await prisma.taxista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Taxistas and only return the `id`
     * const taxistaWithIdOnly = await prisma.taxista.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends taxistaUpdateManyAndReturnArgs>(args: SelectSubset<T, taxistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Taxista.
     * @param {taxistaUpsertArgs} args - Arguments to update or create a Taxista.
     * @example
     * // Update or create a Taxista
     * const taxista = await prisma.taxista.upsert({
     *   create: {
     *     // ... data to create a Taxista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taxista we want to update
     *   }
     * })
     */
    upsert<T extends taxistaUpsertArgs>(args: SelectSubset<T, taxistaUpsertArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taxistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxistaCountArgs} args - Arguments to filter Taxistas to count.
     * @example
     * // Count the number of Taxistas
     * const count = await prisma.taxista.count({
     *   where: {
     *     // ... the filter for the Taxistas we want to count
     *   }
     * })
    **/
    count<T extends taxistaCountArgs>(
      args?: Subset<T, taxistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taxista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxistaAggregateArgs>(args: Subset<T, TaxistaAggregateArgs>): Prisma.PrismaPromise<GetTaxistaAggregateType<T>>

    /**
     * Group by Taxista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxistaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taxistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taxistaGroupByArgs['orderBy'] }
        : { orderBy?: taxistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taxistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the taxista model
   */
  readonly fields: taxistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for taxista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taxistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    moto<T extends taxista$motoArgs<ExtArgs> = {}>(args?: Subset<T, taxista$motoArgs<ExtArgs>>): Prisma__motoClient<$Result.GetResult<Prisma.$motoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    viagem<T extends taxista$viagemArgs<ExtArgs> = {}>(args?: Subset<T, taxista$viagemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the taxista model
   */
  interface taxistaFieldRefs {
    readonly id: FieldRef<"taxista", 'String'>
    readonly nome: FieldRef<"taxista", 'String'>
    readonly apelido: FieldRef<"taxista", 'String'>
    readonly documento: FieldRef<"taxista", 'String'>
    readonly email: FieldRef<"taxista", 'String'>
    readonly senha: FieldRef<"taxista", 'String'>
    readonly criadoEm: FieldRef<"taxista", 'DateTime'>
    readonly disponivel: FieldRef<"taxista", 'Boolean'>
    readonly accuracy: FieldRef<"taxista", 'Float'>
    readonly lastGpsAt: FieldRef<"taxista", 'DateTime'>
    readonly lat: FieldRef<"taxista", 'Float'>
    readonly lng: FieldRef<"taxista", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * taxista findUnique
   */
  export type taxistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
    /**
     * Filter, which taxista to fetch.
     */
    where: taxistaWhereUniqueInput
  }

  /**
   * taxista findUniqueOrThrow
   */
  export type taxistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
    /**
     * Filter, which taxista to fetch.
     */
    where: taxistaWhereUniqueInput
  }

  /**
   * taxista findFirst
   */
  export type taxistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
    /**
     * Filter, which taxista to fetch.
     */
    where?: taxistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxistas to fetch.
     */
    orderBy?: taxistaOrderByWithRelationInput | taxistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taxistas.
     */
    cursor?: taxistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taxistas.
     */
    distinct?: TaxistaScalarFieldEnum | TaxistaScalarFieldEnum[]
  }

  /**
   * taxista findFirstOrThrow
   */
  export type taxistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
    /**
     * Filter, which taxista to fetch.
     */
    where?: taxistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxistas to fetch.
     */
    orderBy?: taxistaOrderByWithRelationInput | taxistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taxistas.
     */
    cursor?: taxistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taxistas.
     */
    distinct?: TaxistaScalarFieldEnum | TaxistaScalarFieldEnum[]
  }

  /**
   * taxista findMany
   */
  export type taxistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
    /**
     * Filter, which taxistas to fetch.
     */
    where?: taxistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxistas to fetch.
     */
    orderBy?: taxistaOrderByWithRelationInput | taxistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing taxistas.
     */
    cursor?: taxistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxistas.
     */
    skip?: number
    distinct?: TaxistaScalarFieldEnum | TaxistaScalarFieldEnum[]
  }

  /**
   * taxista create
   */
  export type taxistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
    /**
     * The data needed to create a taxista.
     */
    data: XOR<taxistaCreateInput, taxistaUncheckedCreateInput>
  }

  /**
   * taxista createMany
   */
  export type taxistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many taxistas.
     */
    data: taxistaCreateManyInput | taxistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * taxista createManyAndReturn
   */
  export type taxistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * The data used to create many taxistas.
     */
    data: taxistaCreateManyInput | taxistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * taxista update
   */
  export type taxistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
    /**
     * The data needed to update a taxista.
     */
    data: XOR<taxistaUpdateInput, taxistaUncheckedUpdateInput>
    /**
     * Choose, which taxista to update.
     */
    where: taxistaWhereUniqueInput
  }

  /**
   * taxista updateMany
   */
  export type taxistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update taxistas.
     */
    data: XOR<taxistaUpdateManyMutationInput, taxistaUncheckedUpdateManyInput>
    /**
     * Filter which taxistas to update
     */
    where?: taxistaWhereInput
    /**
     * Limit how many taxistas to update.
     */
    limit?: number
  }

  /**
   * taxista updateManyAndReturn
   */
  export type taxistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * The data used to update taxistas.
     */
    data: XOR<taxistaUpdateManyMutationInput, taxistaUncheckedUpdateManyInput>
    /**
     * Filter which taxistas to update
     */
    where?: taxistaWhereInput
    /**
     * Limit how many taxistas to update.
     */
    limit?: number
  }

  /**
   * taxista upsert
   */
  export type taxistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
    /**
     * The filter to search for the taxista to update in case it exists.
     */
    where: taxistaWhereUniqueInput
    /**
     * In case the taxista found by the `where` argument doesn't exist, create a new taxista with this data.
     */
    create: XOR<taxistaCreateInput, taxistaUncheckedCreateInput>
    /**
     * In case the taxista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taxistaUpdateInput, taxistaUncheckedUpdateInput>
  }

  /**
   * taxista delete
   */
  export type taxistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
    /**
     * Filter which taxista to delete.
     */
    where: taxistaWhereUniqueInput
  }

  /**
   * taxista deleteMany
   */
  export type taxistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taxistas to delete
     */
    where?: taxistaWhereInput
    /**
     * Limit how many taxistas to delete.
     */
    limit?: number
  }

  /**
   * taxista.moto
   */
  export type taxista$motoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moto
     */
    select?: motoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moto
     */
    omit?: motoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: motoInclude<ExtArgs> | null
    where?: motoWhereInput
  }

  /**
   * taxista.viagem
   */
  export type taxista$viagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    where?: viagemWhereInput
    orderBy?: viagemOrderByWithRelationInput | viagemOrderByWithRelationInput[]
    cursor?: viagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * taxista without action
   */
  export type taxistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxista
     */
    select?: taxistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxista
     */
    omit?: taxistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxistaInclude<ExtArgs> | null
  }


  /**
   * Model viagem
   */

  export type AggregateViagem = {
    _count: ViagemCountAggregateOutputType | null
    _min: ViagemMinAggregateOutputType | null
    _max: ViagemMaxAggregateOutputType | null
  }

  export type ViagemMinAggregateOutputType = {
    id: string | null
    status: $Enums.viagem_status | null
    origemTexto: string | null
    destinoTexto: string | null
    criadoEm: Date | null
    passageiroId: string | null
    taxistaId: string | null
  }

  export type ViagemMaxAggregateOutputType = {
    id: string | null
    status: $Enums.viagem_status | null
    origemTexto: string | null
    destinoTexto: string | null
    criadoEm: Date | null
    passageiroId: string | null
    taxistaId: string | null
  }

  export type ViagemCountAggregateOutputType = {
    id: number
    status: number
    origemTexto: number
    destinoTexto: number
    criadoEm: number
    passageiroId: number
    taxistaId: number
    _all: number
  }


  export type ViagemMinAggregateInputType = {
    id?: true
    status?: true
    origemTexto?: true
    destinoTexto?: true
    criadoEm?: true
    passageiroId?: true
    taxistaId?: true
  }

  export type ViagemMaxAggregateInputType = {
    id?: true
    status?: true
    origemTexto?: true
    destinoTexto?: true
    criadoEm?: true
    passageiroId?: true
    taxistaId?: true
  }

  export type ViagemCountAggregateInputType = {
    id?: true
    status?: true
    origemTexto?: true
    destinoTexto?: true
    criadoEm?: true
    passageiroId?: true
    taxistaId?: true
    _all?: true
  }

  export type ViagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which viagem to aggregate.
     */
    where?: viagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viagems to fetch.
     */
    orderBy?: viagemOrderByWithRelationInput | viagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: viagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned viagems
    **/
    _count?: true | ViagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViagemMaxAggregateInputType
  }

  export type GetViagemAggregateType<T extends ViagemAggregateArgs> = {
        [P in keyof T & keyof AggregateViagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViagem[P]>
      : GetScalarType<T[P], AggregateViagem[P]>
  }




  export type viagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viagemWhereInput
    orderBy?: viagemOrderByWithAggregationInput | viagemOrderByWithAggregationInput[]
    by: ViagemScalarFieldEnum[] | ViagemScalarFieldEnum
    having?: viagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViagemCountAggregateInputType | true
    _min?: ViagemMinAggregateInputType
    _max?: ViagemMaxAggregateInputType
  }

  export type ViagemGroupByOutputType = {
    id: string
    status: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm: Date
    passageiroId: string
    taxistaId: string
    _count: ViagemCountAggregateOutputType | null
    _min: ViagemMinAggregateOutputType | null
    _max: ViagemMaxAggregateOutputType | null
  }

  type GetViagemGroupByPayload<T extends viagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViagemGroupByOutputType[P]>
            : GetScalarType<T[P], ViagemGroupByOutputType[P]>
        }
      >
    >


  export type viagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    origemTexto?: boolean
    destinoTexto?: boolean
    criadoEm?: boolean
    passageiroId?: boolean
    taxistaId?: boolean
    passageiro?: boolean | passageiroDefaultArgs<ExtArgs>
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viagem"]>

  export type viagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    origemTexto?: boolean
    destinoTexto?: boolean
    criadoEm?: boolean
    passageiroId?: boolean
    taxistaId?: boolean
    passageiro?: boolean | passageiroDefaultArgs<ExtArgs>
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viagem"]>

  export type viagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    origemTexto?: boolean
    destinoTexto?: boolean
    criadoEm?: boolean
    passageiroId?: boolean
    taxistaId?: boolean
    passageiro?: boolean | passageiroDefaultArgs<ExtArgs>
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viagem"]>

  export type viagemSelectScalar = {
    id?: boolean
    status?: boolean
    origemTexto?: boolean
    destinoTexto?: boolean
    criadoEm?: boolean
    passageiroId?: boolean
    taxistaId?: boolean
  }

  export type viagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "origemTexto" | "destinoTexto" | "criadoEm" | "passageiroId" | "taxistaId", ExtArgs["result"]["viagem"]>
  export type viagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passageiro?: boolean | passageiroDefaultArgs<ExtArgs>
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }
  export type viagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passageiro?: boolean | passageiroDefaultArgs<ExtArgs>
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }
  export type viagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passageiro?: boolean | passageiroDefaultArgs<ExtArgs>
    taxista?: boolean | taxistaDefaultArgs<ExtArgs>
  }

  export type $viagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "viagem"
    objects: {
      passageiro: Prisma.$passageiroPayload<ExtArgs>
      taxista: Prisma.$taxistaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.viagem_status
      origemTexto: string
      destinoTexto: string
      criadoEm: Date
      passageiroId: string
      taxistaId: string
    }, ExtArgs["result"]["viagem"]>
    composites: {}
  }

  type viagemGetPayload<S extends boolean | null | undefined | viagemDefaultArgs> = $Result.GetResult<Prisma.$viagemPayload, S>

  type viagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<viagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViagemCountAggregateInputType | true
    }

  export interface viagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['viagem'], meta: { name: 'viagem' } }
    /**
     * Find zero or one Viagem that matches the filter.
     * @param {viagemFindUniqueArgs} args - Arguments to find a Viagem
     * @example
     * // Get one Viagem
     * const viagem = await prisma.viagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends viagemFindUniqueArgs>(args: SelectSubset<T, viagemFindUniqueArgs<ExtArgs>>): Prisma__viagemClient<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {viagemFindUniqueOrThrowArgs} args - Arguments to find a Viagem
     * @example
     * // Get one Viagem
     * const viagem = await prisma.viagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends viagemFindUniqueOrThrowArgs>(args: SelectSubset<T, viagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__viagemClient<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagemFindFirstArgs} args - Arguments to find a Viagem
     * @example
     * // Get one Viagem
     * const viagem = await prisma.viagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends viagemFindFirstArgs>(args?: SelectSubset<T, viagemFindFirstArgs<ExtArgs>>): Prisma__viagemClient<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagemFindFirstOrThrowArgs} args - Arguments to find a Viagem
     * @example
     * // Get one Viagem
     * const viagem = await prisma.viagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends viagemFindFirstOrThrowArgs>(args?: SelectSubset<T, viagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__viagemClient<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viagems
     * const viagems = await prisma.viagem.findMany()
     * 
     * // Get first 10 Viagems
     * const viagems = await prisma.viagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viagemWithIdOnly = await prisma.viagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends viagemFindManyArgs>(args?: SelectSubset<T, viagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viagem.
     * @param {viagemCreateArgs} args - Arguments to create a Viagem.
     * @example
     * // Create one Viagem
     * const Viagem = await prisma.viagem.create({
     *   data: {
     *     // ... data to create a Viagem
     *   }
     * })
     * 
     */
    create<T extends viagemCreateArgs>(args: SelectSubset<T, viagemCreateArgs<ExtArgs>>): Prisma__viagemClient<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viagems.
     * @param {viagemCreateManyArgs} args - Arguments to create many Viagems.
     * @example
     * // Create many Viagems
     * const viagem = await prisma.viagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends viagemCreateManyArgs>(args?: SelectSubset<T, viagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viagems and returns the data saved in the database.
     * @param {viagemCreateManyAndReturnArgs} args - Arguments to create many Viagems.
     * @example
     * // Create many Viagems
     * const viagem = await prisma.viagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viagems and only return the `id`
     * const viagemWithIdOnly = await prisma.viagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends viagemCreateManyAndReturnArgs>(args?: SelectSubset<T, viagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viagem.
     * @param {viagemDeleteArgs} args - Arguments to delete one Viagem.
     * @example
     * // Delete one Viagem
     * const Viagem = await prisma.viagem.delete({
     *   where: {
     *     // ... filter to delete one Viagem
     *   }
     * })
     * 
     */
    delete<T extends viagemDeleteArgs>(args: SelectSubset<T, viagemDeleteArgs<ExtArgs>>): Prisma__viagemClient<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viagem.
     * @param {viagemUpdateArgs} args - Arguments to update one Viagem.
     * @example
     * // Update one Viagem
     * const viagem = await prisma.viagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends viagemUpdateArgs>(args: SelectSubset<T, viagemUpdateArgs<ExtArgs>>): Prisma__viagemClient<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viagems.
     * @param {viagemDeleteManyArgs} args - Arguments to filter Viagems to delete.
     * @example
     * // Delete a few Viagems
     * const { count } = await prisma.viagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends viagemDeleteManyArgs>(args?: SelectSubset<T, viagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viagems
     * const viagem = await prisma.viagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends viagemUpdateManyArgs>(args: SelectSubset<T, viagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viagems and returns the data updated in the database.
     * @param {viagemUpdateManyAndReturnArgs} args - Arguments to update many Viagems.
     * @example
     * // Update many Viagems
     * const viagem = await prisma.viagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viagems and only return the `id`
     * const viagemWithIdOnly = await prisma.viagem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends viagemUpdateManyAndReturnArgs>(args: SelectSubset<T, viagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viagem.
     * @param {viagemUpsertArgs} args - Arguments to update or create a Viagem.
     * @example
     * // Update or create a Viagem
     * const viagem = await prisma.viagem.upsert({
     *   create: {
     *     // ... data to create a Viagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viagem we want to update
     *   }
     * })
     */
    upsert<T extends viagemUpsertArgs>(args: SelectSubset<T, viagemUpsertArgs<ExtArgs>>): Prisma__viagemClient<$Result.GetResult<Prisma.$viagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagemCountArgs} args - Arguments to filter Viagems to count.
     * @example
     * // Count the number of Viagems
     * const count = await prisma.viagem.count({
     *   where: {
     *     // ... the filter for the Viagems we want to count
     *   }
     * })
    **/
    count<T extends viagemCountArgs>(
      args?: Subset<T, viagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViagemAggregateArgs>(args: Subset<T, ViagemAggregateArgs>): Prisma.PrismaPromise<GetViagemAggregateType<T>>

    /**
     * Group by Viagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viagemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends viagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: viagemGroupByArgs['orderBy'] }
        : { orderBy?: viagemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, viagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the viagem model
   */
  readonly fields: viagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for viagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__viagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passageiro<T extends passageiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, passageiroDefaultArgs<ExtArgs>>): Prisma__passageiroClient<$Result.GetResult<Prisma.$passageiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taxista<T extends taxistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, taxistaDefaultArgs<ExtArgs>>): Prisma__taxistaClient<$Result.GetResult<Prisma.$taxistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the viagem model
   */
  interface viagemFieldRefs {
    readonly id: FieldRef<"viagem", 'String'>
    readonly status: FieldRef<"viagem", 'viagem_status'>
    readonly origemTexto: FieldRef<"viagem", 'String'>
    readonly destinoTexto: FieldRef<"viagem", 'String'>
    readonly criadoEm: FieldRef<"viagem", 'DateTime'>
    readonly passageiroId: FieldRef<"viagem", 'String'>
    readonly taxistaId: FieldRef<"viagem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * viagem findUnique
   */
  export type viagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    /**
     * Filter, which viagem to fetch.
     */
    where: viagemWhereUniqueInput
  }

  /**
   * viagem findUniqueOrThrow
   */
  export type viagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    /**
     * Filter, which viagem to fetch.
     */
    where: viagemWhereUniqueInput
  }

  /**
   * viagem findFirst
   */
  export type viagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    /**
     * Filter, which viagem to fetch.
     */
    where?: viagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viagems to fetch.
     */
    orderBy?: viagemOrderByWithRelationInput | viagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for viagems.
     */
    cursor?: viagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of viagems.
     */
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * viagem findFirstOrThrow
   */
  export type viagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    /**
     * Filter, which viagem to fetch.
     */
    where?: viagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viagems to fetch.
     */
    orderBy?: viagemOrderByWithRelationInput | viagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for viagems.
     */
    cursor?: viagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of viagems.
     */
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * viagem findMany
   */
  export type viagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    /**
     * Filter, which viagems to fetch.
     */
    where?: viagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viagems to fetch.
     */
    orderBy?: viagemOrderByWithRelationInput | viagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing viagems.
     */
    cursor?: viagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viagems.
     */
    skip?: number
    distinct?: ViagemScalarFieldEnum | ViagemScalarFieldEnum[]
  }

  /**
   * viagem create
   */
  export type viagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    /**
     * The data needed to create a viagem.
     */
    data: XOR<viagemCreateInput, viagemUncheckedCreateInput>
  }

  /**
   * viagem createMany
   */
  export type viagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many viagems.
     */
    data: viagemCreateManyInput | viagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * viagem createManyAndReturn
   */
  export type viagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * The data used to create many viagems.
     */
    data: viagemCreateManyInput | viagemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * viagem update
   */
  export type viagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    /**
     * The data needed to update a viagem.
     */
    data: XOR<viagemUpdateInput, viagemUncheckedUpdateInput>
    /**
     * Choose, which viagem to update.
     */
    where: viagemWhereUniqueInput
  }

  /**
   * viagem updateMany
   */
  export type viagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update viagems.
     */
    data: XOR<viagemUpdateManyMutationInput, viagemUncheckedUpdateManyInput>
    /**
     * Filter which viagems to update
     */
    where?: viagemWhereInput
    /**
     * Limit how many viagems to update.
     */
    limit?: number
  }

  /**
   * viagem updateManyAndReturn
   */
  export type viagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * The data used to update viagems.
     */
    data: XOR<viagemUpdateManyMutationInput, viagemUncheckedUpdateManyInput>
    /**
     * Filter which viagems to update
     */
    where?: viagemWhereInput
    /**
     * Limit how many viagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * viagem upsert
   */
  export type viagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    /**
     * The filter to search for the viagem to update in case it exists.
     */
    where: viagemWhereUniqueInput
    /**
     * In case the viagem found by the `where` argument doesn't exist, create a new viagem with this data.
     */
    create: XOR<viagemCreateInput, viagemUncheckedCreateInput>
    /**
     * In case the viagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<viagemUpdateInput, viagemUncheckedUpdateInput>
  }

  /**
   * viagem delete
   */
  export type viagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
    /**
     * Filter which viagem to delete.
     */
    where: viagemWhereUniqueInput
  }

  /**
   * viagem deleteMany
   */
  export type viagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which viagems to delete
     */
    where?: viagemWhereInput
    /**
     * Limit how many viagems to delete.
     */
    limit?: number
  }

  /**
   * viagem without action
   */
  export type viagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viagem
     */
    select?: viagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viagem
     */
    omit?: viagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viagemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MotoScalarFieldEnum: {
    id: 'id',
    nomeMoto: 'nomeMoto',
    matricula: 'matricula',
    criadoEm: 'criadoEm',
    taxistaId: 'taxistaId'
  };

  export type MotoScalarFieldEnum = (typeof MotoScalarFieldEnum)[keyof typeof MotoScalarFieldEnum]


  export const PassageiroScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    apelido: 'apelido',
    documento: 'documento',
    email: 'email',
    senha: 'senha',
    criadoEm: 'criadoEm'
  };

  export type PassageiroScalarFieldEnum = (typeof PassageiroScalarFieldEnum)[keyof typeof PassageiroScalarFieldEnum]


  export const TaxistaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    apelido: 'apelido',
    documento: 'documento',
    email: 'email',
    senha: 'senha',
    criadoEm: 'criadoEm',
    disponivel: 'disponivel',
    accuracy: 'accuracy',
    lastGpsAt: 'lastGpsAt',
    lat: 'lat',
    lng: 'lng'
  };

  export type TaxistaScalarFieldEnum = (typeof TaxistaScalarFieldEnum)[keyof typeof TaxistaScalarFieldEnum]


  export const ViagemScalarFieldEnum: {
    id: 'id',
    status: 'status',
    origemTexto: 'origemTexto',
    destinoTexto: 'destinoTexto',
    criadoEm: 'criadoEm',
    passageiroId: 'passageiroId',
    taxistaId: 'taxistaId'
  };

  export type ViagemScalarFieldEnum = (typeof ViagemScalarFieldEnum)[keyof typeof ViagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'viagem_status'
   */
  export type Enumviagem_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'viagem_status'>
    


  /**
   * Reference to a field of type 'viagem_status[]'
   */
  export type ListEnumviagem_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'viagem_status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type motoWhereInput = {
    AND?: motoWhereInput | motoWhereInput[]
    OR?: motoWhereInput[]
    NOT?: motoWhereInput | motoWhereInput[]
    id?: StringFilter<"moto"> | string
    nomeMoto?: StringFilter<"moto"> | string
    matricula?: StringFilter<"moto"> | string
    criadoEm?: DateTimeFilter<"moto"> | Date | string
    taxistaId?: StringFilter<"moto"> | string
    taxista?: XOR<TaxistaScalarRelationFilter, taxistaWhereInput>
  }

  export type motoOrderByWithRelationInput = {
    id?: SortOrder
    nomeMoto?: SortOrder
    matricula?: SortOrder
    criadoEm?: SortOrder
    taxistaId?: SortOrder
    taxista?: taxistaOrderByWithRelationInput
  }

  export type motoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matricula?: string
    taxistaId?: string
    AND?: motoWhereInput | motoWhereInput[]
    OR?: motoWhereInput[]
    NOT?: motoWhereInput | motoWhereInput[]
    nomeMoto?: StringFilter<"moto"> | string
    criadoEm?: DateTimeFilter<"moto"> | Date | string
    taxista?: XOR<TaxistaScalarRelationFilter, taxistaWhereInput>
  }, "id" | "matricula" | "taxistaId">

  export type motoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeMoto?: SortOrder
    matricula?: SortOrder
    criadoEm?: SortOrder
    taxistaId?: SortOrder
    _count?: motoCountOrderByAggregateInput
    _max?: motoMaxOrderByAggregateInput
    _min?: motoMinOrderByAggregateInput
  }

  export type motoScalarWhereWithAggregatesInput = {
    AND?: motoScalarWhereWithAggregatesInput | motoScalarWhereWithAggregatesInput[]
    OR?: motoScalarWhereWithAggregatesInput[]
    NOT?: motoScalarWhereWithAggregatesInput | motoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"moto"> | string
    nomeMoto?: StringWithAggregatesFilter<"moto"> | string
    matricula?: StringWithAggregatesFilter<"moto"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"moto"> | Date | string
    taxistaId?: StringWithAggregatesFilter<"moto"> | string
  }

  export type passageiroWhereInput = {
    AND?: passageiroWhereInput | passageiroWhereInput[]
    OR?: passageiroWhereInput[]
    NOT?: passageiroWhereInput | passageiroWhereInput[]
    id?: StringFilter<"passageiro"> | string
    nome?: StringFilter<"passageiro"> | string
    apelido?: StringFilter<"passageiro"> | string
    documento?: StringFilter<"passageiro"> | string
    email?: StringFilter<"passageiro"> | string
    senha?: StringFilter<"passageiro"> | string
    criadoEm?: DateTimeFilter<"passageiro"> | Date | string
    viagem?: ViagemListRelationFilter
  }

  export type passageiroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    viagem?: viagemOrderByRelationAggregateInput
  }

  export type passageiroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documento?: string
    email?: string
    AND?: passageiroWhereInput | passageiroWhereInput[]
    OR?: passageiroWhereInput[]
    NOT?: passageiroWhereInput | passageiroWhereInput[]
    nome?: StringFilter<"passageiro"> | string
    apelido?: StringFilter<"passageiro"> | string
    senha?: StringFilter<"passageiro"> | string
    criadoEm?: DateTimeFilter<"passageiro"> | Date | string
    viagem?: ViagemListRelationFilter
  }, "id" | "documento" | "email">

  export type passageiroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    _count?: passageiroCountOrderByAggregateInput
    _max?: passageiroMaxOrderByAggregateInput
    _min?: passageiroMinOrderByAggregateInput
  }

  export type passageiroScalarWhereWithAggregatesInput = {
    AND?: passageiroScalarWhereWithAggregatesInput | passageiroScalarWhereWithAggregatesInput[]
    OR?: passageiroScalarWhereWithAggregatesInput[]
    NOT?: passageiroScalarWhereWithAggregatesInput | passageiroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"passageiro"> | string
    nome?: StringWithAggregatesFilter<"passageiro"> | string
    apelido?: StringWithAggregatesFilter<"passageiro"> | string
    documento?: StringWithAggregatesFilter<"passageiro"> | string
    email?: StringWithAggregatesFilter<"passageiro"> | string
    senha?: StringWithAggregatesFilter<"passageiro"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"passageiro"> | Date | string
  }

  export type taxistaWhereInput = {
    AND?: taxistaWhereInput | taxistaWhereInput[]
    OR?: taxistaWhereInput[]
    NOT?: taxistaWhereInput | taxistaWhereInput[]
    id?: StringFilter<"taxista"> | string
    nome?: StringFilter<"taxista"> | string
    apelido?: StringFilter<"taxista"> | string
    documento?: StringFilter<"taxista"> | string
    email?: StringFilter<"taxista"> | string
    senha?: StringFilter<"taxista"> | string
    criadoEm?: DateTimeFilter<"taxista"> | Date | string
    disponivel?: BoolFilter<"taxista"> | boolean
    accuracy?: FloatNullableFilter<"taxista"> | number | null
    lastGpsAt?: DateTimeNullableFilter<"taxista"> | Date | string | null
    lat?: FloatNullableFilter<"taxista"> | number | null
    lng?: FloatNullableFilter<"taxista"> | number | null
    moto?: XOR<MotoNullableScalarRelationFilter, motoWhereInput> | null
    viagem?: ViagemListRelationFilter
  }

  export type taxistaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    disponivel?: SortOrder
    accuracy?: SortOrderInput | SortOrder
    lastGpsAt?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    moto?: motoOrderByWithRelationInput
    viagem?: viagemOrderByRelationAggregateInput
  }

  export type taxistaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documento?: string
    email?: string
    AND?: taxistaWhereInput | taxistaWhereInput[]
    OR?: taxistaWhereInput[]
    NOT?: taxistaWhereInput | taxistaWhereInput[]
    nome?: StringFilter<"taxista"> | string
    apelido?: StringFilter<"taxista"> | string
    senha?: StringFilter<"taxista"> | string
    criadoEm?: DateTimeFilter<"taxista"> | Date | string
    disponivel?: BoolFilter<"taxista"> | boolean
    accuracy?: FloatNullableFilter<"taxista"> | number | null
    lastGpsAt?: DateTimeNullableFilter<"taxista"> | Date | string | null
    lat?: FloatNullableFilter<"taxista"> | number | null
    lng?: FloatNullableFilter<"taxista"> | number | null
    moto?: XOR<MotoNullableScalarRelationFilter, motoWhereInput> | null
    viagem?: ViagemListRelationFilter
  }, "id" | "documento" | "email">

  export type taxistaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    disponivel?: SortOrder
    accuracy?: SortOrderInput | SortOrder
    lastGpsAt?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    _count?: taxistaCountOrderByAggregateInput
    _avg?: taxistaAvgOrderByAggregateInput
    _max?: taxistaMaxOrderByAggregateInput
    _min?: taxistaMinOrderByAggregateInput
    _sum?: taxistaSumOrderByAggregateInput
  }

  export type taxistaScalarWhereWithAggregatesInput = {
    AND?: taxistaScalarWhereWithAggregatesInput | taxistaScalarWhereWithAggregatesInput[]
    OR?: taxistaScalarWhereWithAggregatesInput[]
    NOT?: taxistaScalarWhereWithAggregatesInput | taxistaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"taxista"> | string
    nome?: StringWithAggregatesFilter<"taxista"> | string
    apelido?: StringWithAggregatesFilter<"taxista"> | string
    documento?: StringWithAggregatesFilter<"taxista"> | string
    email?: StringWithAggregatesFilter<"taxista"> | string
    senha?: StringWithAggregatesFilter<"taxista"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"taxista"> | Date | string
    disponivel?: BoolWithAggregatesFilter<"taxista"> | boolean
    accuracy?: FloatNullableWithAggregatesFilter<"taxista"> | number | null
    lastGpsAt?: DateTimeNullableWithAggregatesFilter<"taxista"> | Date | string | null
    lat?: FloatNullableWithAggregatesFilter<"taxista"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"taxista"> | number | null
  }

  export type viagemWhereInput = {
    AND?: viagemWhereInput | viagemWhereInput[]
    OR?: viagemWhereInput[]
    NOT?: viagemWhereInput | viagemWhereInput[]
    id?: StringFilter<"viagem"> | string
    status?: Enumviagem_statusFilter<"viagem"> | $Enums.viagem_status
    origemTexto?: StringFilter<"viagem"> | string
    destinoTexto?: StringFilter<"viagem"> | string
    criadoEm?: DateTimeFilter<"viagem"> | Date | string
    passageiroId?: StringFilter<"viagem"> | string
    taxistaId?: StringFilter<"viagem"> | string
    passageiro?: XOR<PassageiroScalarRelationFilter, passageiroWhereInput>
    taxista?: XOR<TaxistaScalarRelationFilter, taxistaWhereInput>
  }

  export type viagemOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    origemTexto?: SortOrder
    destinoTexto?: SortOrder
    criadoEm?: SortOrder
    passageiroId?: SortOrder
    taxistaId?: SortOrder
    passageiro?: passageiroOrderByWithRelationInput
    taxista?: taxistaOrderByWithRelationInput
  }

  export type viagemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: viagemWhereInput | viagemWhereInput[]
    OR?: viagemWhereInput[]
    NOT?: viagemWhereInput | viagemWhereInput[]
    status?: Enumviagem_statusFilter<"viagem"> | $Enums.viagem_status
    origemTexto?: StringFilter<"viagem"> | string
    destinoTexto?: StringFilter<"viagem"> | string
    criadoEm?: DateTimeFilter<"viagem"> | Date | string
    passageiroId?: StringFilter<"viagem"> | string
    taxistaId?: StringFilter<"viagem"> | string
    passageiro?: XOR<PassageiroScalarRelationFilter, passageiroWhereInput>
    taxista?: XOR<TaxistaScalarRelationFilter, taxistaWhereInput>
  }, "id">

  export type viagemOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    origemTexto?: SortOrder
    destinoTexto?: SortOrder
    criadoEm?: SortOrder
    passageiroId?: SortOrder
    taxistaId?: SortOrder
    _count?: viagemCountOrderByAggregateInput
    _max?: viagemMaxOrderByAggregateInput
    _min?: viagemMinOrderByAggregateInput
  }

  export type viagemScalarWhereWithAggregatesInput = {
    AND?: viagemScalarWhereWithAggregatesInput | viagemScalarWhereWithAggregatesInput[]
    OR?: viagemScalarWhereWithAggregatesInput[]
    NOT?: viagemScalarWhereWithAggregatesInput | viagemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"viagem"> | string
    status?: Enumviagem_statusWithAggregatesFilter<"viagem"> | $Enums.viagem_status
    origemTexto?: StringWithAggregatesFilter<"viagem"> | string
    destinoTexto?: StringWithAggregatesFilter<"viagem"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"viagem"> | Date | string
    passageiroId?: StringWithAggregatesFilter<"viagem"> | string
    taxistaId?: StringWithAggregatesFilter<"viagem"> | string
  }

  export type motoCreateInput = {
    id?: string
    nomeMoto: string
    matricula: string
    criadoEm?: Date | string
    taxista: taxistaCreateNestedOneWithoutMotoInput
  }

  export type motoUncheckedCreateInput = {
    id?: string
    nomeMoto: string
    matricula: string
    criadoEm?: Date | string
    taxistaId: string
  }

  export type motoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMoto?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    taxista?: taxistaUpdateOneRequiredWithoutMotoNestedInput
  }

  export type motoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMoto?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    taxistaId?: StringFieldUpdateOperationsInput | string
  }

  export type motoCreateManyInput = {
    id?: string
    nomeMoto: string
    matricula: string
    criadoEm?: Date | string
    taxistaId: string
  }

  export type motoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMoto?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type motoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMoto?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    taxistaId?: StringFieldUpdateOperationsInput | string
  }

  export type passageiroCreateInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
    viagem?: viagemCreateNestedManyWithoutPassageiroInput
  }

  export type passageiroUncheckedCreateInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
    viagem?: viagemUncheckedCreateNestedManyWithoutPassageiroInput
  }

  export type passageiroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    viagem?: viagemUpdateManyWithoutPassageiroNestedInput
  }

  export type passageiroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    viagem?: viagemUncheckedUpdateManyWithoutPassageiroNestedInput
  }

  export type passageiroCreateManyInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type passageiroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passageiroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type taxistaCreateInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
    disponivel?: boolean
    accuracy?: number | null
    lastGpsAt?: Date | string | null
    lat?: number | null
    lng?: number | null
    moto?: motoCreateNestedOneWithoutTaxistaInput
    viagem?: viagemCreateNestedManyWithoutTaxistaInput
  }

  export type taxistaUncheckedCreateInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
    disponivel?: boolean
    accuracy?: number | null
    lastGpsAt?: Date | string | null
    lat?: number | null
    lng?: number | null
    moto?: motoUncheckedCreateNestedOneWithoutTaxistaInput
    viagem?: viagemUncheckedCreateNestedManyWithoutTaxistaInput
  }

  export type taxistaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGpsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    moto?: motoUpdateOneWithoutTaxistaNestedInput
    viagem?: viagemUpdateManyWithoutTaxistaNestedInput
  }

  export type taxistaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGpsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    moto?: motoUncheckedUpdateOneWithoutTaxistaNestedInput
    viagem?: viagemUncheckedUpdateManyWithoutTaxistaNestedInput
  }

  export type taxistaCreateManyInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
    disponivel?: boolean
    accuracy?: number | null
    lastGpsAt?: Date | string | null
    lat?: number | null
    lng?: number | null
  }

  export type taxistaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGpsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type taxistaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGpsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type viagemCreateInput = {
    id?: string
    status?: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm?: Date | string
    passageiro: passageiroCreateNestedOneWithoutViagemInput
    taxista: taxistaCreateNestedOneWithoutViagemInput
  }

  export type viagemUncheckedCreateInput = {
    id?: string
    status?: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm?: Date | string
    passageiroId: string
    taxistaId: string
  }

  export type viagemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiro?: passageiroUpdateOneRequiredWithoutViagemNestedInput
    taxista?: taxistaUpdateOneRequiredWithoutViagemNestedInput
  }

  export type viagemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiroId?: StringFieldUpdateOperationsInput | string
    taxistaId?: StringFieldUpdateOperationsInput | string
  }

  export type viagemCreateManyInput = {
    id?: string
    status?: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm?: Date | string
    passageiroId: string
    taxistaId: string
  }

  export type viagemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type viagemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiroId?: StringFieldUpdateOperationsInput | string
    taxistaId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TaxistaScalarRelationFilter = {
    is?: taxistaWhereInput
    isNot?: taxistaWhereInput
  }

  export type motoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeMoto?: SortOrder
    matricula?: SortOrder
    criadoEm?: SortOrder
    taxistaId?: SortOrder
  }

  export type motoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeMoto?: SortOrder
    matricula?: SortOrder
    criadoEm?: SortOrder
    taxistaId?: SortOrder
  }

  export type motoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeMoto?: SortOrder
    matricula?: SortOrder
    criadoEm?: SortOrder
    taxistaId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ViagemListRelationFilter = {
    every?: viagemWhereInput
    some?: viagemWhereInput
    none?: viagemWhereInput
  }

  export type viagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type passageiroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type passageiroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type passageiroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MotoNullableScalarRelationFilter = {
    is?: motoWhereInput | null
    isNot?: motoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type taxistaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    disponivel?: SortOrder
    accuracy?: SortOrder
    lastGpsAt?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type taxistaAvgOrderByAggregateInput = {
    accuracy?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type taxistaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    disponivel?: SortOrder
    accuracy?: SortOrder
    lastGpsAt?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type taxistaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    documento?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    disponivel?: SortOrder
    accuracy?: SortOrder
    lastGpsAt?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type taxistaSumOrderByAggregateInput = {
    accuracy?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumviagem_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.viagem_status | Enumviagem_statusFieldRefInput<$PrismaModel>
    in?: $Enums.viagem_status[] | ListEnumviagem_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.viagem_status[] | ListEnumviagem_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumviagem_statusFilter<$PrismaModel> | $Enums.viagem_status
  }

  export type PassageiroScalarRelationFilter = {
    is?: passageiroWhereInput
    isNot?: passageiroWhereInput
  }

  export type viagemCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    origemTexto?: SortOrder
    destinoTexto?: SortOrder
    criadoEm?: SortOrder
    passageiroId?: SortOrder
    taxistaId?: SortOrder
  }

  export type viagemMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    origemTexto?: SortOrder
    destinoTexto?: SortOrder
    criadoEm?: SortOrder
    passageiroId?: SortOrder
    taxistaId?: SortOrder
  }

  export type viagemMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    origemTexto?: SortOrder
    destinoTexto?: SortOrder
    criadoEm?: SortOrder
    passageiroId?: SortOrder
    taxistaId?: SortOrder
  }

  export type Enumviagem_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.viagem_status | Enumviagem_statusFieldRefInput<$PrismaModel>
    in?: $Enums.viagem_status[] | ListEnumviagem_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.viagem_status[] | ListEnumviagem_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumviagem_statusWithAggregatesFilter<$PrismaModel> | $Enums.viagem_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumviagem_statusFilter<$PrismaModel>
    _max?: NestedEnumviagem_statusFilter<$PrismaModel>
  }

  export type taxistaCreateNestedOneWithoutMotoInput = {
    create?: XOR<taxistaCreateWithoutMotoInput, taxistaUncheckedCreateWithoutMotoInput>
    connectOrCreate?: taxistaCreateOrConnectWithoutMotoInput
    connect?: taxistaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type taxistaUpdateOneRequiredWithoutMotoNestedInput = {
    create?: XOR<taxistaCreateWithoutMotoInput, taxistaUncheckedCreateWithoutMotoInput>
    connectOrCreate?: taxistaCreateOrConnectWithoutMotoInput
    upsert?: taxistaUpsertWithoutMotoInput
    connect?: taxistaWhereUniqueInput
    update?: XOR<XOR<taxistaUpdateToOneWithWhereWithoutMotoInput, taxistaUpdateWithoutMotoInput>, taxistaUncheckedUpdateWithoutMotoInput>
  }

  export type viagemCreateNestedManyWithoutPassageiroInput = {
    create?: XOR<viagemCreateWithoutPassageiroInput, viagemUncheckedCreateWithoutPassageiroInput> | viagemCreateWithoutPassageiroInput[] | viagemUncheckedCreateWithoutPassageiroInput[]
    connectOrCreate?: viagemCreateOrConnectWithoutPassageiroInput | viagemCreateOrConnectWithoutPassageiroInput[]
    createMany?: viagemCreateManyPassageiroInputEnvelope
    connect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
  }

  export type viagemUncheckedCreateNestedManyWithoutPassageiroInput = {
    create?: XOR<viagemCreateWithoutPassageiroInput, viagemUncheckedCreateWithoutPassageiroInput> | viagemCreateWithoutPassageiroInput[] | viagemUncheckedCreateWithoutPassageiroInput[]
    connectOrCreate?: viagemCreateOrConnectWithoutPassageiroInput | viagemCreateOrConnectWithoutPassageiroInput[]
    createMany?: viagemCreateManyPassageiroInputEnvelope
    connect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
  }

  export type viagemUpdateManyWithoutPassageiroNestedInput = {
    create?: XOR<viagemCreateWithoutPassageiroInput, viagemUncheckedCreateWithoutPassageiroInput> | viagemCreateWithoutPassageiroInput[] | viagemUncheckedCreateWithoutPassageiroInput[]
    connectOrCreate?: viagemCreateOrConnectWithoutPassageiroInput | viagemCreateOrConnectWithoutPassageiroInput[]
    upsert?: viagemUpsertWithWhereUniqueWithoutPassageiroInput | viagemUpsertWithWhereUniqueWithoutPassageiroInput[]
    createMany?: viagemCreateManyPassageiroInputEnvelope
    set?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    disconnect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    delete?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    connect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    update?: viagemUpdateWithWhereUniqueWithoutPassageiroInput | viagemUpdateWithWhereUniqueWithoutPassageiroInput[]
    updateMany?: viagemUpdateManyWithWhereWithoutPassageiroInput | viagemUpdateManyWithWhereWithoutPassageiroInput[]
    deleteMany?: viagemScalarWhereInput | viagemScalarWhereInput[]
  }

  export type viagemUncheckedUpdateManyWithoutPassageiroNestedInput = {
    create?: XOR<viagemCreateWithoutPassageiroInput, viagemUncheckedCreateWithoutPassageiroInput> | viagemCreateWithoutPassageiroInput[] | viagemUncheckedCreateWithoutPassageiroInput[]
    connectOrCreate?: viagemCreateOrConnectWithoutPassageiroInput | viagemCreateOrConnectWithoutPassageiroInput[]
    upsert?: viagemUpsertWithWhereUniqueWithoutPassageiroInput | viagemUpsertWithWhereUniqueWithoutPassageiroInput[]
    createMany?: viagemCreateManyPassageiroInputEnvelope
    set?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    disconnect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    delete?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    connect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    update?: viagemUpdateWithWhereUniqueWithoutPassageiroInput | viagemUpdateWithWhereUniqueWithoutPassageiroInput[]
    updateMany?: viagemUpdateManyWithWhereWithoutPassageiroInput | viagemUpdateManyWithWhereWithoutPassageiroInput[]
    deleteMany?: viagemScalarWhereInput | viagemScalarWhereInput[]
  }

  export type motoCreateNestedOneWithoutTaxistaInput = {
    create?: XOR<motoCreateWithoutTaxistaInput, motoUncheckedCreateWithoutTaxistaInput>
    connectOrCreate?: motoCreateOrConnectWithoutTaxistaInput
    connect?: motoWhereUniqueInput
  }

  export type viagemCreateNestedManyWithoutTaxistaInput = {
    create?: XOR<viagemCreateWithoutTaxistaInput, viagemUncheckedCreateWithoutTaxistaInput> | viagemCreateWithoutTaxistaInput[] | viagemUncheckedCreateWithoutTaxistaInput[]
    connectOrCreate?: viagemCreateOrConnectWithoutTaxistaInput | viagemCreateOrConnectWithoutTaxistaInput[]
    createMany?: viagemCreateManyTaxistaInputEnvelope
    connect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
  }

  export type motoUncheckedCreateNestedOneWithoutTaxistaInput = {
    create?: XOR<motoCreateWithoutTaxistaInput, motoUncheckedCreateWithoutTaxistaInput>
    connectOrCreate?: motoCreateOrConnectWithoutTaxistaInput
    connect?: motoWhereUniqueInput
  }

  export type viagemUncheckedCreateNestedManyWithoutTaxistaInput = {
    create?: XOR<viagemCreateWithoutTaxistaInput, viagemUncheckedCreateWithoutTaxistaInput> | viagemCreateWithoutTaxistaInput[] | viagemUncheckedCreateWithoutTaxistaInput[]
    connectOrCreate?: viagemCreateOrConnectWithoutTaxistaInput | viagemCreateOrConnectWithoutTaxistaInput[]
    createMany?: viagemCreateManyTaxistaInputEnvelope
    connect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type motoUpdateOneWithoutTaxistaNestedInput = {
    create?: XOR<motoCreateWithoutTaxistaInput, motoUncheckedCreateWithoutTaxistaInput>
    connectOrCreate?: motoCreateOrConnectWithoutTaxistaInput
    upsert?: motoUpsertWithoutTaxistaInput
    disconnect?: motoWhereInput | boolean
    delete?: motoWhereInput | boolean
    connect?: motoWhereUniqueInput
    update?: XOR<XOR<motoUpdateToOneWithWhereWithoutTaxistaInput, motoUpdateWithoutTaxistaInput>, motoUncheckedUpdateWithoutTaxistaInput>
  }

  export type viagemUpdateManyWithoutTaxistaNestedInput = {
    create?: XOR<viagemCreateWithoutTaxistaInput, viagemUncheckedCreateWithoutTaxistaInput> | viagemCreateWithoutTaxistaInput[] | viagemUncheckedCreateWithoutTaxistaInput[]
    connectOrCreate?: viagemCreateOrConnectWithoutTaxistaInput | viagemCreateOrConnectWithoutTaxistaInput[]
    upsert?: viagemUpsertWithWhereUniqueWithoutTaxistaInput | viagemUpsertWithWhereUniqueWithoutTaxistaInput[]
    createMany?: viagemCreateManyTaxistaInputEnvelope
    set?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    disconnect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    delete?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    connect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    update?: viagemUpdateWithWhereUniqueWithoutTaxistaInput | viagemUpdateWithWhereUniqueWithoutTaxistaInput[]
    updateMany?: viagemUpdateManyWithWhereWithoutTaxistaInput | viagemUpdateManyWithWhereWithoutTaxistaInput[]
    deleteMany?: viagemScalarWhereInput | viagemScalarWhereInput[]
  }

  export type motoUncheckedUpdateOneWithoutTaxistaNestedInput = {
    create?: XOR<motoCreateWithoutTaxistaInput, motoUncheckedCreateWithoutTaxistaInput>
    connectOrCreate?: motoCreateOrConnectWithoutTaxistaInput
    upsert?: motoUpsertWithoutTaxistaInput
    disconnect?: motoWhereInput | boolean
    delete?: motoWhereInput | boolean
    connect?: motoWhereUniqueInput
    update?: XOR<XOR<motoUpdateToOneWithWhereWithoutTaxistaInput, motoUpdateWithoutTaxistaInput>, motoUncheckedUpdateWithoutTaxistaInput>
  }

  export type viagemUncheckedUpdateManyWithoutTaxistaNestedInput = {
    create?: XOR<viagemCreateWithoutTaxistaInput, viagemUncheckedCreateWithoutTaxistaInput> | viagemCreateWithoutTaxistaInput[] | viagemUncheckedCreateWithoutTaxistaInput[]
    connectOrCreate?: viagemCreateOrConnectWithoutTaxistaInput | viagemCreateOrConnectWithoutTaxistaInput[]
    upsert?: viagemUpsertWithWhereUniqueWithoutTaxistaInput | viagemUpsertWithWhereUniqueWithoutTaxistaInput[]
    createMany?: viagemCreateManyTaxistaInputEnvelope
    set?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    disconnect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    delete?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    connect?: viagemWhereUniqueInput | viagemWhereUniqueInput[]
    update?: viagemUpdateWithWhereUniqueWithoutTaxistaInput | viagemUpdateWithWhereUniqueWithoutTaxistaInput[]
    updateMany?: viagemUpdateManyWithWhereWithoutTaxistaInput | viagemUpdateManyWithWhereWithoutTaxistaInput[]
    deleteMany?: viagemScalarWhereInput | viagemScalarWhereInput[]
  }

  export type passageiroCreateNestedOneWithoutViagemInput = {
    create?: XOR<passageiroCreateWithoutViagemInput, passageiroUncheckedCreateWithoutViagemInput>
    connectOrCreate?: passageiroCreateOrConnectWithoutViagemInput
    connect?: passageiroWhereUniqueInput
  }

  export type taxistaCreateNestedOneWithoutViagemInput = {
    create?: XOR<taxistaCreateWithoutViagemInput, taxistaUncheckedCreateWithoutViagemInput>
    connectOrCreate?: taxistaCreateOrConnectWithoutViagemInput
    connect?: taxistaWhereUniqueInput
  }

  export type Enumviagem_statusFieldUpdateOperationsInput = {
    set?: $Enums.viagem_status
  }

  export type passageiroUpdateOneRequiredWithoutViagemNestedInput = {
    create?: XOR<passageiroCreateWithoutViagemInput, passageiroUncheckedCreateWithoutViagemInput>
    connectOrCreate?: passageiroCreateOrConnectWithoutViagemInput
    upsert?: passageiroUpsertWithoutViagemInput
    connect?: passageiroWhereUniqueInput
    update?: XOR<XOR<passageiroUpdateToOneWithWhereWithoutViagemInput, passageiroUpdateWithoutViagemInput>, passageiroUncheckedUpdateWithoutViagemInput>
  }

  export type taxistaUpdateOneRequiredWithoutViagemNestedInput = {
    create?: XOR<taxistaCreateWithoutViagemInput, taxistaUncheckedCreateWithoutViagemInput>
    connectOrCreate?: taxistaCreateOrConnectWithoutViagemInput
    upsert?: taxistaUpsertWithoutViagemInput
    connect?: taxistaWhereUniqueInput
    update?: XOR<XOR<taxistaUpdateToOneWithWhereWithoutViagemInput, taxistaUpdateWithoutViagemInput>, taxistaUncheckedUpdateWithoutViagemInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumviagem_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.viagem_status | Enumviagem_statusFieldRefInput<$PrismaModel>
    in?: $Enums.viagem_status[] | ListEnumviagem_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.viagem_status[] | ListEnumviagem_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumviagem_statusFilter<$PrismaModel> | $Enums.viagem_status
  }

  export type NestedEnumviagem_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.viagem_status | Enumviagem_statusFieldRefInput<$PrismaModel>
    in?: $Enums.viagem_status[] | ListEnumviagem_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.viagem_status[] | ListEnumviagem_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumviagem_statusWithAggregatesFilter<$PrismaModel> | $Enums.viagem_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumviagem_statusFilter<$PrismaModel>
    _max?: NestedEnumviagem_statusFilter<$PrismaModel>
  }

  export type taxistaCreateWithoutMotoInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
    disponivel?: boolean
    accuracy?: number | null
    lastGpsAt?: Date | string | null
    lat?: number | null
    lng?: number | null
    viagem?: viagemCreateNestedManyWithoutTaxistaInput
  }

  export type taxistaUncheckedCreateWithoutMotoInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
    disponivel?: boolean
    accuracy?: number | null
    lastGpsAt?: Date | string | null
    lat?: number | null
    lng?: number | null
    viagem?: viagemUncheckedCreateNestedManyWithoutTaxistaInput
  }

  export type taxistaCreateOrConnectWithoutMotoInput = {
    where: taxistaWhereUniqueInput
    create: XOR<taxistaCreateWithoutMotoInput, taxistaUncheckedCreateWithoutMotoInput>
  }

  export type taxistaUpsertWithoutMotoInput = {
    update: XOR<taxistaUpdateWithoutMotoInput, taxistaUncheckedUpdateWithoutMotoInput>
    create: XOR<taxistaCreateWithoutMotoInput, taxistaUncheckedCreateWithoutMotoInput>
    where?: taxistaWhereInput
  }

  export type taxistaUpdateToOneWithWhereWithoutMotoInput = {
    where?: taxistaWhereInput
    data: XOR<taxistaUpdateWithoutMotoInput, taxistaUncheckedUpdateWithoutMotoInput>
  }

  export type taxistaUpdateWithoutMotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGpsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    viagem?: viagemUpdateManyWithoutTaxistaNestedInput
  }

  export type taxistaUncheckedUpdateWithoutMotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGpsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    viagem?: viagemUncheckedUpdateManyWithoutTaxistaNestedInput
  }

  export type viagemCreateWithoutPassageiroInput = {
    id?: string
    status?: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm?: Date | string
    taxista: taxistaCreateNestedOneWithoutViagemInput
  }

  export type viagemUncheckedCreateWithoutPassageiroInput = {
    id?: string
    status?: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm?: Date | string
    taxistaId: string
  }

  export type viagemCreateOrConnectWithoutPassageiroInput = {
    where: viagemWhereUniqueInput
    create: XOR<viagemCreateWithoutPassageiroInput, viagemUncheckedCreateWithoutPassageiroInput>
  }

  export type viagemCreateManyPassageiroInputEnvelope = {
    data: viagemCreateManyPassageiroInput | viagemCreateManyPassageiroInput[]
    skipDuplicates?: boolean
  }

  export type viagemUpsertWithWhereUniqueWithoutPassageiroInput = {
    where: viagemWhereUniqueInput
    update: XOR<viagemUpdateWithoutPassageiroInput, viagemUncheckedUpdateWithoutPassageiroInput>
    create: XOR<viagemCreateWithoutPassageiroInput, viagemUncheckedCreateWithoutPassageiroInput>
  }

  export type viagemUpdateWithWhereUniqueWithoutPassageiroInput = {
    where: viagemWhereUniqueInput
    data: XOR<viagemUpdateWithoutPassageiroInput, viagemUncheckedUpdateWithoutPassageiroInput>
  }

  export type viagemUpdateManyWithWhereWithoutPassageiroInput = {
    where: viagemScalarWhereInput
    data: XOR<viagemUpdateManyMutationInput, viagemUncheckedUpdateManyWithoutPassageiroInput>
  }

  export type viagemScalarWhereInput = {
    AND?: viagemScalarWhereInput | viagemScalarWhereInput[]
    OR?: viagemScalarWhereInput[]
    NOT?: viagemScalarWhereInput | viagemScalarWhereInput[]
    id?: StringFilter<"viagem"> | string
    status?: Enumviagem_statusFilter<"viagem"> | $Enums.viagem_status
    origemTexto?: StringFilter<"viagem"> | string
    destinoTexto?: StringFilter<"viagem"> | string
    criadoEm?: DateTimeFilter<"viagem"> | Date | string
    passageiroId?: StringFilter<"viagem"> | string
    taxistaId?: StringFilter<"viagem"> | string
  }

  export type motoCreateWithoutTaxistaInput = {
    id?: string
    nomeMoto: string
    matricula: string
    criadoEm?: Date | string
  }

  export type motoUncheckedCreateWithoutTaxistaInput = {
    id?: string
    nomeMoto: string
    matricula: string
    criadoEm?: Date | string
  }

  export type motoCreateOrConnectWithoutTaxistaInput = {
    where: motoWhereUniqueInput
    create: XOR<motoCreateWithoutTaxistaInput, motoUncheckedCreateWithoutTaxistaInput>
  }

  export type viagemCreateWithoutTaxistaInput = {
    id?: string
    status?: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm?: Date | string
    passageiro: passageiroCreateNestedOneWithoutViagemInput
  }

  export type viagemUncheckedCreateWithoutTaxistaInput = {
    id?: string
    status?: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm?: Date | string
    passageiroId: string
  }

  export type viagemCreateOrConnectWithoutTaxistaInput = {
    where: viagemWhereUniqueInput
    create: XOR<viagemCreateWithoutTaxistaInput, viagemUncheckedCreateWithoutTaxistaInput>
  }

  export type viagemCreateManyTaxistaInputEnvelope = {
    data: viagemCreateManyTaxistaInput | viagemCreateManyTaxistaInput[]
    skipDuplicates?: boolean
  }

  export type motoUpsertWithoutTaxistaInput = {
    update: XOR<motoUpdateWithoutTaxistaInput, motoUncheckedUpdateWithoutTaxistaInput>
    create: XOR<motoCreateWithoutTaxistaInput, motoUncheckedCreateWithoutTaxistaInput>
    where?: motoWhereInput
  }

  export type motoUpdateToOneWithWhereWithoutTaxistaInput = {
    where?: motoWhereInput
    data: XOR<motoUpdateWithoutTaxistaInput, motoUncheckedUpdateWithoutTaxistaInput>
  }

  export type motoUpdateWithoutTaxistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMoto?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type motoUncheckedUpdateWithoutTaxistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeMoto?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type viagemUpsertWithWhereUniqueWithoutTaxistaInput = {
    where: viagemWhereUniqueInput
    update: XOR<viagemUpdateWithoutTaxistaInput, viagemUncheckedUpdateWithoutTaxistaInput>
    create: XOR<viagemCreateWithoutTaxistaInput, viagemUncheckedCreateWithoutTaxistaInput>
  }

  export type viagemUpdateWithWhereUniqueWithoutTaxistaInput = {
    where: viagemWhereUniqueInput
    data: XOR<viagemUpdateWithoutTaxistaInput, viagemUncheckedUpdateWithoutTaxistaInput>
  }

  export type viagemUpdateManyWithWhereWithoutTaxistaInput = {
    where: viagemScalarWhereInput
    data: XOR<viagemUpdateManyMutationInput, viagemUncheckedUpdateManyWithoutTaxistaInput>
  }

  export type passageiroCreateWithoutViagemInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type passageiroUncheckedCreateWithoutViagemInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
  }

  export type passageiroCreateOrConnectWithoutViagemInput = {
    where: passageiroWhereUniqueInput
    create: XOR<passageiroCreateWithoutViagemInput, passageiroUncheckedCreateWithoutViagemInput>
  }

  export type taxistaCreateWithoutViagemInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
    disponivel?: boolean
    accuracy?: number | null
    lastGpsAt?: Date | string | null
    lat?: number | null
    lng?: number | null
    moto?: motoCreateNestedOneWithoutTaxistaInput
  }

  export type taxistaUncheckedCreateWithoutViagemInput = {
    id?: string
    nome: string
    apelido: string
    documento: string
    email: string
    senha: string
    criadoEm?: Date | string
    disponivel?: boolean
    accuracy?: number | null
    lastGpsAt?: Date | string | null
    lat?: number | null
    lng?: number | null
    moto?: motoUncheckedCreateNestedOneWithoutTaxistaInput
  }

  export type taxistaCreateOrConnectWithoutViagemInput = {
    where: taxistaWhereUniqueInput
    create: XOR<taxistaCreateWithoutViagemInput, taxistaUncheckedCreateWithoutViagemInput>
  }

  export type passageiroUpsertWithoutViagemInput = {
    update: XOR<passageiroUpdateWithoutViagemInput, passageiroUncheckedUpdateWithoutViagemInput>
    create: XOR<passageiroCreateWithoutViagemInput, passageiroUncheckedCreateWithoutViagemInput>
    where?: passageiroWhereInput
  }

  export type passageiroUpdateToOneWithWhereWithoutViagemInput = {
    where?: passageiroWhereInput
    data: XOR<passageiroUpdateWithoutViagemInput, passageiroUncheckedUpdateWithoutViagemInput>
  }

  export type passageiroUpdateWithoutViagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passageiroUncheckedUpdateWithoutViagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type taxistaUpsertWithoutViagemInput = {
    update: XOR<taxistaUpdateWithoutViagemInput, taxistaUncheckedUpdateWithoutViagemInput>
    create: XOR<taxistaCreateWithoutViagemInput, taxistaUncheckedCreateWithoutViagemInput>
    where?: taxistaWhereInput
  }

  export type taxistaUpdateToOneWithWhereWithoutViagemInput = {
    where?: taxistaWhereInput
    data: XOR<taxistaUpdateWithoutViagemInput, taxistaUncheckedUpdateWithoutViagemInput>
  }

  export type taxistaUpdateWithoutViagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGpsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    moto?: motoUpdateOneWithoutTaxistaNestedInput
  }

  export type taxistaUncheckedUpdateWithoutViagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    lastGpsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    moto?: motoUncheckedUpdateOneWithoutTaxistaNestedInput
  }

  export type viagemCreateManyPassageiroInput = {
    id?: string
    status?: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm?: Date | string
    taxistaId: string
  }

  export type viagemUpdateWithoutPassageiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    taxista?: taxistaUpdateOneRequiredWithoutViagemNestedInput
  }

  export type viagemUncheckedUpdateWithoutPassageiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    taxistaId?: StringFieldUpdateOperationsInput | string
  }

  export type viagemUncheckedUpdateManyWithoutPassageiroInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    taxistaId?: StringFieldUpdateOperationsInput | string
  }

  export type viagemCreateManyTaxistaInput = {
    id?: string
    status?: $Enums.viagem_status
    origemTexto: string
    destinoTexto: string
    criadoEm?: Date | string
    passageiroId: string
  }

  export type viagemUpdateWithoutTaxistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiro?: passageiroUpdateOneRequiredWithoutViagemNestedInput
  }

  export type viagemUncheckedUpdateWithoutTaxistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiroId?: StringFieldUpdateOperationsInput | string
  }

  export type viagemUncheckedUpdateManyWithoutTaxistaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumviagem_statusFieldUpdateOperationsInput | $Enums.viagem_status
    origemTexto?: StringFieldUpdateOperationsInput | string
    destinoTexto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    passageiroId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}