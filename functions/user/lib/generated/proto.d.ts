import * as $protobuf from "protobufjs";
/** Namespace js. */
export namespace js {

    /** Namespace chirp. */
    namespace chirp {

        /** Namespace user. */
        namespace user {

            /** Namespace api. */
            namespace api {

                /** Properties of a RegistrationRequest. */
                interface IRegistrationRequest {

                    /** RegistrationRequest userName */
                    userName?: (string|null);

                    /** RegistrationRequest password */
                    password?: (string|null);
                }

                /** Represents a RegistrationRequest. */
                class RegistrationRequest implements IRegistrationRequest {

                    /**
                     * Constructs a new RegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: js.chirp.user.api.IRegistrationRequest);

                    /** RegistrationRequest userName. */
                    public userName: string;

                    /** RegistrationRequest password. */
                    public password: string;

                    /**
                     * Creates a new RegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegistrationRequest instance
                     */
                    public static create(properties?: js.chirp.user.api.IRegistrationRequest): js.chirp.user.api.RegistrationRequest;

                    /**
                     * Encodes the specified RegistrationRequest message. Does not implicitly {@link js.chirp.user.api.RegistrationRequest.verify|verify} messages.
                     * @param message RegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: js.chirp.user.api.IRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegistrationRequest message, length delimited. Does not implicitly {@link js.chirp.user.api.RegistrationRequest.verify|verify} messages.
                     * @param message RegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: js.chirp.user.api.IRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): js.chirp.user.api.RegistrationRequest;

                    /**
                     * Decodes a RegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): js.chirp.user.api.RegistrationRequest;

                    /**
                     * Verifies a RegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): js.chirp.user.api.RegistrationRequest;

                    /**
                     * Creates a plain object from a RegistrationRequest message. Also converts values to other types if specified.
                     * @param message RegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: js.chirp.user.api.RegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LoginRequest. */
                interface ILoginRequest {

                    /** LoginRequest userName */
                    userName?: (string|null);

                    /** LoginRequest password */
                    password?: (string|null);
                }

                /** Represents a LoginRequest. */
                class LoginRequest implements ILoginRequest {

                    /**
                     * Constructs a new LoginRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: js.chirp.user.api.ILoginRequest);

                    /** LoginRequest userName. */
                    public userName: string;

                    /** LoginRequest password. */
                    public password: string;

                    /**
                     * Creates a new LoginRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoginRequest instance
                     */
                    public static create(properties?: js.chirp.user.api.ILoginRequest): js.chirp.user.api.LoginRequest;

                    /**
                     * Encodes the specified LoginRequest message. Does not implicitly {@link js.chirp.user.api.LoginRequest.verify|verify} messages.
                     * @param message LoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: js.chirp.user.api.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link js.chirp.user.api.LoginRequest.verify|verify} messages.
                     * @param message LoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: js.chirp.user.api.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoginRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): js.chirp.user.api.LoginRequest;

                    /**
                     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): js.chirp.user.api.LoginRequest;

                    /**
                     * Verifies a LoginRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoginRequest
                     */
                    public static fromObject(object: { [k: string]: any }): js.chirp.user.api.LoginRequest;

                    /**
                     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
                     * @param message LoginRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: js.chirp.user.api.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoginRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Token. */
                interface IToken {

                    /** Token value */
                    value?: (string|null);
                }

                /** Represents a Token. */
                class Token implements IToken {

                    /**
                     * Constructs a new Token.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: js.chirp.user.api.IToken);

                    /** Token value. */
                    public value: string;

                    /**
                     * Creates a new Token instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Token instance
                     */
                    public static create(properties?: js.chirp.user.api.IToken): js.chirp.user.api.Token;

                    /**
                     * Encodes the specified Token message. Does not implicitly {@link js.chirp.user.api.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: js.chirp.user.api.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Token message, length delimited. Does not implicitly {@link js.chirp.user.api.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: js.chirp.user.api.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Token message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): js.chirp.user.api.Token;

                    /**
                     * Decodes a Token message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): js.chirp.user.api.Token;

                    /**
                     * Verifies a Token message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Token message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Token
                     */
                    public static fromObject(object: { [k: string]: any }): js.chirp.user.api.Token;

                    /**
                     * Creates a plain object from a Token message. Also converts values to other types if specified.
                     * @param message Token
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: js.chirp.user.api.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Token to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a ChirpUserService */
                class ChirpUserService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ChirpUserService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ChirpUserService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ChirpUserService;

                    /**
                     * Calls Register.
                     * @param request RegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public register(request: js.chirp.user.api.IRegistrationRequest, callback: js.chirp.user.api.ChirpUserService.RegisterCallback): void;

                    /**
                     * Calls Register.
                     * @param request RegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public register(request: js.chirp.user.api.IRegistrationRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls Login.
                     * @param request LoginRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Token
                     */
                    public login(request: js.chirp.user.api.ILoginRequest, callback: js.chirp.user.api.ChirpUserService.LoginCallback): void;

                    /**
                     * Calls Login.
                     * @param request LoginRequest message or plain object
                     * @returns Promise
                     */
                    public login(request: js.chirp.user.api.ILoginRequest): Promise<js.chirp.user.api.Token>;
                }

                namespace ChirpUserService {

                    /**
                     * Callback as used by {@link js.chirp.user.api.ChirpUserService#register}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type RegisterCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link js.chirp.user.api.ChirpUserService#login}.
                     * @param error Error, if any
                     * @param [response] Token
                     */
                    type LoginCallback = (error: (Error|null), response?: js.chirp.user.api.Token) => void;
                }
            }

            /** Namespace domain. */
            namespace domain {

                /** Properties of a User. */
                interface IUser {

                    /** User userName */
                    userName?: (string|null);

                    /** User password */
                    password?: (string|null);
                }

                /** Represents a User. */
                class User implements IUser {

                    /**
                     * Constructs a new User.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: js.chirp.user.domain.IUser);

                    /** User userName. */
                    public userName: string;

                    /** User password. */
                    public password: string;

                    /**
                     * Creates a new User instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns User instance
                     */
                    public static create(properties?: js.chirp.user.domain.IUser): js.chirp.user.domain.User;

                    /**
                     * Encodes the specified User message. Does not implicitly {@link js.chirp.user.domain.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: js.chirp.user.domain.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link js.chirp.user.domain.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: js.chirp.user.domain.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): js.chirp.user.domain.User;

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): js.chirp.user.domain.User;

                    /**
                     * Verifies a User message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns User
                     */
                    public static fromObject(object: { [k: string]: any }): js.chirp.user.domain.User;

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @param message User
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: js.chirp.user.domain.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this User to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
