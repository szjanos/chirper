import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace example. */
    namespace example {

        /** Properties of a ChirpRequest. */
        interface IChirpRequest {

            /** ChirpRequest userName */
            userName?: (string|null);

            /** ChirpRequest text */
            text?: (string|null);
        }

        /** Represents a ChirpRequest. */
        class ChirpRequest implements IChirpRequest {

            /**
             * Constructs a new ChirpRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.example.IChirpRequest);

            /** ChirpRequest userName. */
            public userName: string;

            /** ChirpRequest text. */
            public text: string;

            /**
             * Creates a new ChirpRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChirpRequest instance
             */
            public static create(properties?: com.example.IChirpRequest): com.example.ChirpRequest;

            /**
             * Encodes the specified ChirpRequest message. Does not implicitly {@link com.example.ChirpRequest.verify|verify} messages.
             * @param message ChirpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.example.IChirpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChirpRequest message, length delimited. Does not implicitly {@link com.example.ChirpRequest.verify|verify} messages.
             * @param message ChirpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.example.IChirpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChirpRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChirpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.ChirpRequest;

            /**
             * Decodes a ChirpRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChirpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.ChirpRequest;

            /**
             * Verifies a ChirpRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChirpRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChirpRequest
             */
            public static fromObject(object: { [k: string]: any }): com.example.ChirpRequest;

            /**
             * Creates a plain object from a ChirpRequest message. Also converts values to other types if specified.
             * @param message ChirpRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.example.ChirpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChirpRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LikeRequest. */
        interface ILikeRequest {

            /** LikeRequest userName */
            userName?: (string|null);

            /** LikeRequest chirpId */
            chirpId?: (string|null);
        }

        /** Represents a LikeRequest. */
        class LikeRequest implements ILikeRequest {

            /**
             * Constructs a new LikeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.example.ILikeRequest);

            /** LikeRequest userName. */
            public userName: string;

            /** LikeRequest chirpId. */
            public chirpId: string;

            /**
             * Creates a new LikeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LikeRequest instance
             */
            public static create(properties?: com.example.ILikeRequest): com.example.LikeRequest;

            /**
             * Encodes the specified LikeRequest message. Does not implicitly {@link com.example.LikeRequest.verify|verify} messages.
             * @param message LikeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.example.ILikeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LikeRequest message, length delimited. Does not implicitly {@link com.example.LikeRequest.verify|verify} messages.
             * @param message LikeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.example.ILikeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LikeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LikeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.LikeRequest;

            /**
             * Decodes a LikeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LikeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.LikeRequest;

            /**
             * Verifies a LikeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LikeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LikeRequest
             */
            public static fromObject(object: { [k: string]: any }): com.example.LikeRequest;

            /**
             * Creates a plain object from a LikeRequest message. Also converts values to other types if specified.
             * @param message LikeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.example.LikeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LikeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetUserChirpsRequest. */
        interface IGetUserChirpsRequest {

            /** GetUserChirpsRequest userName */
            userName?: (string|null);
        }

        /** Represents a GetUserChirpsRequest. */
        class GetUserChirpsRequest implements IGetUserChirpsRequest {

            /**
             * Constructs a new GetUserChirpsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.example.IGetUserChirpsRequest);

            /** GetUserChirpsRequest userName. */
            public userName: string;

            /**
             * Creates a new GetUserChirpsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetUserChirpsRequest instance
             */
            public static create(properties?: com.example.IGetUserChirpsRequest): com.example.GetUserChirpsRequest;

            /**
             * Encodes the specified GetUserChirpsRequest message. Does not implicitly {@link com.example.GetUserChirpsRequest.verify|verify} messages.
             * @param message GetUserChirpsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.example.IGetUserChirpsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetUserChirpsRequest message, length delimited. Does not implicitly {@link com.example.GetUserChirpsRequest.verify|verify} messages.
             * @param message GetUserChirpsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.example.IGetUserChirpsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetUserChirpsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetUserChirpsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.GetUserChirpsRequest;

            /**
             * Decodes a GetUserChirpsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetUserChirpsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.GetUserChirpsRequest;

            /**
             * Verifies a GetUserChirpsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetUserChirpsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetUserChirpsRequest
             */
            public static fromObject(object: { [k: string]: any }): com.example.GetUserChirpsRequest;

            /**
             * Creates a plain object from a GetUserChirpsRequest message. Also converts values to other types if specified.
             * @param message GetUserChirpsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.example.GetUserChirpsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetUserChirpsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserChirps. */
        interface IUserChirps {

            /** UserChirps UserChirps */
            UserChirps?: (com.example.IUserChirps[]|null);
        }

        /** Represents a UserChirps. */
        class UserChirps implements IUserChirps {

            /**
             * Constructs a new UserChirps.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.example.IUserChirps);

            /** UserChirps UserChirps. */
            public UserChirps: com.example.IUserChirps[];

            /**
             * Creates a new UserChirps instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserChirps instance
             */
            public static create(properties?: com.example.IUserChirps): com.example.UserChirps;

            /**
             * Encodes the specified UserChirps message. Does not implicitly {@link com.example.UserChirps.verify|verify} messages.
             * @param message UserChirps message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.example.IUserChirps, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserChirps message, length delimited. Does not implicitly {@link com.example.UserChirps.verify|verify} messages.
             * @param message UserChirps message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.example.IUserChirps, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserChirps message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserChirps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.UserChirps;

            /**
             * Decodes a UserChirps message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserChirps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.UserChirps;

            /**
             * Verifies a UserChirps message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserChirps message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserChirps
             */
            public static fromObject(object: { [k: string]: any }): com.example.UserChirps;

            /**
             * Creates a plain object from a UserChirps message. Also converts values to other types if specified.
             * @param message UserChirps
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: com.example.UserChirps, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserChirps to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a ChirpService */
        class ChirpService extends $protobuf.rpc.Service {

            /**
             * Constructs a new ChirpService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new ChirpService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ChirpService;

            /**
             * Calls Chirp.
             * @param request ChirpRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public chirp(request: com.example.IChirpRequest, callback: com.example.ChirpService.ChirpCallback): void;

            /**
             * Calls Chirp.
             * @param request ChirpRequest message or plain object
             * @returns Promise
             */
            public chirp(request: com.example.IChirpRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls Like.
             * @param request LikeRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public like(request: com.example.ILikeRequest, callback: com.example.ChirpService.LikeCallback): void;

            /**
             * Calls Like.
             * @param request LikeRequest message or plain object
             * @returns Promise
             */
            public like(request: com.example.ILikeRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls GetUserChirps.
             * @param request GetUserChirpsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UserChirps
             */
            public getUserChirps(request: com.example.IGetUserChirpsRequest, callback: com.example.ChirpService.GetUserChirpsCallback): void;

            /**
             * Calls GetUserChirps.
             * @param request GetUserChirpsRequest message or plain object
             * @returns Promise
             */
            public getUserChirps(request: com.example.IGetUserChirpsRequest): Promise<com.example.UserChirps>;
        }

        namespace ChirpService {

            /**
             * Callback as used by {@link com.example.ChirpService#chirp}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type ChirpCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link com.example.ChirpService#like}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type LikeCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link com.example.ChirpService#getUserChirps}.
             * @param error Error, if any
             * @param [response] UserChirps
             */
            type GetUserChirpsCallback = (error: (Error|null), response?: com.example.UserChirps) => void;
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

/** Namespace js. */
export namespace js {

    /** Namespace chirp. */
    namespace chirp {

        /** Namespace persistence. */
        namespace persistence {

            /** Properties of a Chirp. */
            interface IChirp {

                /** Chirp chirpId */
                chirpId?: (string|null);

                /** Chirp text */
                text?: (string|null);

                /** Chirp likes */
                likes?: (number|null);
            }

            /** Represents a Chirp. */
            class Chirp implements IChirp {

                /**
                 * Constructs a new Chirp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: js.chirp.persistence.IChirp);

                /** Chirp chirpId. */
                public chirpId: string;

                /** Chirp text. */
                public text: string;

                /** Chirp likes. */
                public likes: number;

                /**
                 * Creates a new Chirp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Chirp instance
                 */
                public static create(properties?: js.chirp.persistence.IChirp): js.chirp.persistence.Chirp;

                /**
                 * Encodes the specified Chirp message. Does not implicitly {@link js.chirp.persistence.Chirp.verify|verify} messages.
                 * @param message Chirp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: js.chirp.persistence.IChirp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Chirp message, length delimited. Does not implicitly {@link js.chirp.persistence.Chirp.verify|verify} messages.
                 * @param message Chirp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: js.chirp.persistence.IChirp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Chirp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Chirp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): js.chirp.persistence.Chirp;

                /**
                 * Decodes a Chirp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Chirp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): js.chirp.persistence.Chirp;

                /**
                 * Verifies a Chirp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Chirp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Chirp
                 */
                public static fromObject(object: { [k: string]: any }): js.chirp.persistence.Chirp;

                /**
                 * Creates a plain object from a Chirp message. Also converts values to other types if specified.
                 * @param message Chirp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: js.chirp.persistence.Chirp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Chirp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Chirped. */
            interface IChirped {

                /** Chirped chirp */
                chirp?: (js.chirp.persistence.IChirp|null);
            }

            /** Represents a Chirped. */
            class Chirped implements IChirped {

                /**
                 * Constructs a new Chirped.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: js.chirp.persistence.IChirped);

                /** Chirped chirp. */
                public chirp?: (js.chirp.persistence.IChirp|null);

                /**
                 * Creates a new Chirped instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Chirped instance
                 */
                public static create(properties?: js.chirp.persistence.IChirped): js.chirp.persistence.Chirped;

                /**
                 * Encodes the specified Chirped message. Does not implicitly {@link js.chirp.persistence.Chirped.verify|verify} messages.
                 * @param message Chirped message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: js.chirp.persistence.IChirped, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Chirped message, length delimited. Does not implicitly {@link js.chirp.persistence.Chirped.verify|verify} messages.
                 * @param message Chirped message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: js.chirp.persistence.IChirped, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Chirped message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Chirped
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): js.chirp.persistence.Chirped;

                /**
                 * Decodes a Chirped message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Chirped
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): js.chirp.persistence.Chirped;

                /**
                 * Verifies a Chirped message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Chirped message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Chirped
                 */
                public static fromObject(object: { [k: string]: any }): js.chirp.persistence.Chirped;

                /**
                 * Creates a plain object from a Chirped message. Also converts values to other types if specified.
                 * @param message Chirped
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: js.chirp.persistence.Chirped, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Chirped to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Liked. */
            interface ILiked {

                /** Liked chirpId */
                chirpId?: (string|null);
            }

            /** Represents a Liked. */
            class Liked implements ILiked {

                /**
                 * Constructs a new Liked.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: js.chirp.persistence.ILiked);

                /** Liked chirpId. */
                public chirpId: string;

                /**
                 * Creates a new Liked instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Liked instance
                 */
                public static create(properties?: js.chirp.persistence.ILiked): js.chirp.persistence.Liked;

                /**
                 * Encodes the specified Liked message. Does not implicitly {@link js.chirp.persistence.Liked.verify|verify} messages.
                 * @param message Liked message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: js.chirp.persistence.ILiked, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Liked message, length delimited. Does not implicitly {@link js.chirp.persistence.Liked.verify|verify} messages.
                 * @param message Liked message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: js.chirp.persistence.ILiked, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Liked message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Liked
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): js.chirp.persistence.Liked;

                /**
                 * Decodes a Liked message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Liked
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): js.chirp.persistence.Liked;

                /**
                 * Verifies a Liked message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Liked message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Liked
                 */
                public static fromObject(object: { [k: string]: any }): js.chirp.persistence.Liked;

                /**
                 * Creates a plain object from a Liked message. Also converts values to other types if specified.
                 * @param message Liked
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: js.chirp.persistence.Liked, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Liked to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UserChirps. */
            interface IUserChirps {

                /** UserChirps chirps */
                chirps?: (js.chirp.persistence.IChirp[]|null);
            }

            /** Represents a UserChirps. */
            class UserChirps implements IUserChirps {

                /**
                 * Constructs a new UserChirps.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: js.chirp.persistence.IUserChirps);

                /** UserChirps chirps. */
                public chirps: js.chirp.persistence.IChirp[];

                /**
                 * Creates a new UserChirps instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserChirps instance
                 */
                public static create(properties?: js.chirp.persistence.IUserChirps): js.chirp.persistence.UserChirps;

                /**
                 * Encodes the specified UserChirps message. Does not implicitly {@link js.chirp.persistence.UserChirps.verify|verify} messages.
                 * @param message UserChirps message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: js.chirp.persistence.IUserChirps, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UserChirps message, length delimited. Does not implicitly {@link js.chirp.persistence.UserChirps.verify|verify} messages.
                 * @param message UserChirps message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: js.chirp.persistence.IUserChirps, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserChirps message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserChirps
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): js.chirp.persistence.UserChirps;

                /**
                 * Decodes a UserChirps message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UserChirps
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): js.chirp.persistence.UserChirps;

                /**
                 * Verifies a UserChirps message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UserChirps message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserChirps
                 */
                public static fromObject(object: { [k: string]: any }): js.chirp.persistence.UserChirps;

                /**
                 * Creates a plain object from a UserChirps message. Also converts values to other types if specified.
                 * @param message UserChirps
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: js.chirp.persistence.UserChirps, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserChirps to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
