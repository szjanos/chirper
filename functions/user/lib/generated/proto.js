// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.js = (function() {

    /**
     * Namespace js.
     * @exports js
     * @namespace
     */
    var js = {};

    js.chirp = (function() {

        /**
         * Namespace chirp.
         * @memberof js
         * @namespace
         */
        var chirp = {};

        chirp.user = (function() {

            /**
             * Namespace user.
             * @memberof js.chirp
             * @namespace
             */
            var user = {};

            user.api = (function() {

                /**
                 * Namespace api.
                 * @memberof js.chirp.user
                 * @namespace
                 */
                var api = {};

                api.RegistrationRequest = (function() {

                    /**
                     * Properties of a RegistrationRequest.
                     * @memberof js.chirp.user.api
                     * @interface IRegistrationRequest
                     * @property {string|null} [userName] RegistrationRequest userName
                     * @property {string|null} [password] RegistrationRequest password
                     */

                    /**
                     * Constructs a new RegistrationRequest.
                     * @memberof js.chirp.user.api
                     * @classdesc Represents a RegistrationRequest.
                     * @implements IRegistrationRequest
                     * @constructor
                     * @param {js.chirp.user.api.IRegistrationRequest=} [properties] Properties to set
                     */
                    function RegistrationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RegistrationRequest userName.
                     * @member {string} userName
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @instance
                     */
                    RegistrationRequest.prototype.userName = "";

                    /**
                     * RegistrationRequest password.
                     * @member {string} password
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @instance
                     */
                    RegistrationRequest.prototype.password = "";

                    /**
                     * Creates a new RegistrationRequest instance using the specified properties.
                     * @function create
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @static
                     * @param {js.chirp.user.api.IRegistrationRequest=} [properties] Properties to set
                     * @returns {js.chirp.user.api.RegistrationRequest} RegistrationRequest instance
                     */
                    RegistrationRequest.create = function create(properties) {
                        return new RegistrationRequest(properties);
                    };

                    /**
                     * Encodes the specified RegistrationRequest message. Does not implicitly {@link js.chirp.user.api.RegistrationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @static
                     * @param {js.chirp.user.api.IRegistrationRequest} message RegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistrationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
                        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                        return writer;
                    };

                    /**
                     * Encodes the specified RegistrationRequest message, length delimited. Does not implicitly {@link js.chirp.user.api.RegistrationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @static
                     * @param {js.chirp.user.api.IRegistrationRequest} message RegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistrationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RegistrationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {js.chirp.user.api.RegistrationRequest} RegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistrationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.chirp.user.api.RegistrationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.userName = reader.string();
                                break;
                            case 2:
                                message.password = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RegistrationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {js.chirp.user.api.RegistrationRequest} RegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistrationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RegistrationRequest message.
                     * @function verify
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistrationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            if (!$util.isString(message.userName))
                                return "userName: string expected";
                        if (message.password != null && message.hasOwnProperty("password"))
                            if (!$util.isString(message.password))
                                return "password: string expected";
                        return null;
                    };

                    /**
                     * Creates a RegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {js.chirp.user.api.RegistrationRequest} RegistrationRequest
                     */
                    RegistrationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.js.chirp.user.api.RegistrationRequest)
                            return object;
                        var message = new $root.js.chirp.user.api.RegistrationRequest();
                        if (object.userName != null)
                            message.userName = String(object.userName);
                        if (object.password != null)
                            message.password = String(object.password);
                        return message;
                    };

                    /**
                     * Creates a plain object from a RegistrationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @static
                     * @param {js.chirp.user.api.RegistrationRequest} message RegistrationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistrationRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.userName = "";
                            object.password = "";
                        }
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            object.userName = message.userName;
                        if (message.password != null && message.hasOwnProperty("password"))
                            object.password = message.password;
                        return object;
                    };

                    /**
                     * Converts this RegistrationRequest to JSON.
                     * @function toJSON
                     * @memberof js.chirp.user.api.RegistrationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistrationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RegistrationRequest;
                })();

                api.LoginRequest = (function() {

                    /**
                     * Properties of a LoginRequest.
                     * @memberof js.chirp.user.api
                     * @interface ILoginRequest
                     * @property {string|null} [userName] LoginRequest userName
                     * @property {string|null} [password] LoginRequest password
                     */

                    /**
                     * Constructs a new LoginRequest.
                     * @memberof js.chirp.user.api
                     * @classdesc Represents a LoginRequest.
                     * @implements ILoginRequest
                     * @constructor
                     * @param {js.chirp.user.api.ILoginRequest=} [properties] Properties to set
                     */
                    function LoginRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LoginRequest userName.
                     * @member {string} userName
                     * @memberof js.chirp.user.api.LoginRequest
                     * @instance
                     */
                    LoginRequest.prototype.userName = "";

                    /**
                     * LoginRequest password.
                     * @member {string} password
                     * @memberof js.chirp.user.api.LoginRequest
                     * @instance
                     */
                    LoginRequest.prototype.password = "";

                    /**
                     * Creates a new LoginRequest instance using the specified properties.
                     * @function create
                     * @memberof js.chirp.user.api.LoginRequest
                     * @static
                     * @param {js.chirp.user.api.ILoginRequest=} [properties] Properties to set
                     * @returns {js.chirp.user.api.LoginRequest} LoginRequest instance
                     */
                    LoginRequest.create = function create(properties) {
                        return new LoginRequest(properties);
                    };

                    /**
                     * Encodes the specified LoginRequest message. Does not implicitly {@link js.chirp.user.api.LoginRequest.verify|verify} messages.
                     * @function encode
                     * @memberof js.chirp.user.api.LoginRequest
                     * @static
                     * @param {js.chirp.user.api.ILoginRequest} message LoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
                        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                        return writer;
                    };

                    /**
                     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link js.chirp.user.api.LoginRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof js.chirp.user.api.LoginRequest
                     * @static
                     * @param {js.chirp.user.api.ILoginRequest} message LoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LoginRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof js.chirp.user.api.LoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {js.chirp.user.api.LoginRequest} LoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.chirp.user.api.LoginRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.userName = reader.string();
                                break;
                            case 2:
                                message.password = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof js.chirp.user.api.LoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {js.chirp.user.api.LoginRequest} LoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LoginRequest message.
                     * @function verify
                     * @memberof js.chirp.user.api.LoginRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LoginRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            if (!$util.isString(message.userName))
                                return "userName: string expected";
                        if (message.password != null && message.hasOwnProperty("password"))
                            if (!$util.isString(message.password))
                                return "password: string expected";
                        return null;
                    };

                    /**
                     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof js.chirp.user.api.LoginRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {js.chirp.user.api.LoginRequest} LoginRequest
                     */
                    LoginRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.js.chirp.user.api.LoginRequest)
                            return object;
                        var message = new $root.js.chirp.user.api.LoginRequest();
                        if (object.userName != null)
                            message.userName = String(object.userName);
                        if (object.password != null)
                            message.password = String(object.password);
                        return message;
                    };

                    /**
                     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof js.chirp.user.api.LoginRequest
                     * @static
                     * @param {js.chirp.user.api.LoginRequest} message LoginRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LoginRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.userName = "";
                            object.password = "";
                        }
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            object.userName = message.userName;
                        if (message.password != null && message.hasOwnProperty("password"))
                            object.password = message.password;
                        return object;
                    };

                    /**
                     * Converts this LoginRequest to JSON.
                     * @function toJSON
                     * @memberof js.chirp.user.api.LoginRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LoginRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return LoginRequest;
                })();

                api.Token = (function() {

                    /**
                     * Properties of a Token.
                     * @memberof js.chirp.user.api
                     * @interface IToken
                     * @property {string|null} [value] Token value
                     */

                    /**
                     * Constructs a new Token.
                     * @memberof js.chirp.user.api
                     * @classdesc Represents a Token.
                     * @implements IToken
                     * @constructor
                     * @param {js.chirp.user.api.IToken=} [properties] Properties to set
                     */
                    function Token(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Token value.
                     * @member {string} value
                     * @memberof js.chirp.user.api.Token
                     * @instance
                     */
                    Token.prototype.value = "";

                    /**
                     * Creates a new Token instance using the specified properties.
                     * @function create
                     * @memberof js.chirp.user.api.Token
                     * @static
                     * @param {js.chirp.user.api.IToken=} [properties] Properties to set
                     * @returns {js.chirp.user.api.Token} Token instance
                     */
                    Token.create = function create(properties) {
                        return new Token(properties);
                    };

                    /**
                     * Encodes the specified Token message. Does not implicitly {@link js.chirp.user.api.Token.verify|verify} messages.
                     * @function encode
                     * @memberof js.chirp.user.api.Token
                     * @static
                     * @param {js.chirp.user.api.IToken} message Token message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Token.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                        return writer;
                    };

                    /**
                     * Encodes the specified Token message, length delimited. Does not implicitly {@link js.chirp.user.api.Token.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof js.chirp.user.api.Token
                     * @static
                     * @param {js.chirp.user.api.IToken} message Token message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Token.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Token message from the specified reader or buffer.
                     * @function decode
                     * @memberof js.chirp.user.api.Token
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {js.chirp.user.api.Token} Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Token.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.chirp.user.api.Token();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.value = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Token message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof js.chirp.user.api.Token
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {js.chirp.user.api.Token} Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Token.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Token message.
                     * @function verify
                     * @memberof js.chirp.user.api.Token
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Token.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            if (!$util.isString(message.value))
                                return "value: string expected";
                        return null;
                    };

                    /**
                     * Creates a Token message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof js.chirp.user.api.Token
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {js.chirp.user.api.Token} Token
                     */
                    Token.fromObject = function fromObject(object) {
                        if (object instanceof $root.js.chirp.user.api.Token)
                            return object;
                        var message = new $root.js.chirp.user.api.Token();
                        if (object.value != null)
                            message.value = String(object.value);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Token message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof js.chirp.user.api.Token
                     * @static
                     * @param {js.chirp.user.api.Token} message Token
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Token.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.value = "";
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = message.value;
                        return object;
                    };

                    /**
                     * Converts this Token to JSON.
                     * @function toJSON
                     * @memberof js.chirp.user.api.Token
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Token.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Token;
                })();

                api.ChirpUserService = (function() {

                    /**
                     * Constructs a new ChirpUserService service.
                     * @memberof js.chirp.user.api
                     * @classdesc Represents a ChirpUserService
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function ChirpUserService(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }

                    (ChirpUserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ChirpUserService;

                    /**
                     * Creates new ChirpUserService service using the specified rpc implementation.
                     * @function create
                     * @memberof js.chirp.user.api.ChirpUserService
                     * @static
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     * @returns {ChirpUserService} RPC service. Useful where requests and/or responses are streamed.
                     */
                    ChirpUserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };

                    /**
                     * Callback as used by {@link js.chirp.user.api.ChirpUserService#register}.
                     * @memberof js.chirp.user.api.ChirpUserService
                     * @typedef RegisterCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {google.protobuf.Empty} [response] Empty
                     */

                    /**
                     * Calls Register.
                     * @function register
                     * @memberof js.chirp.user.api.ChirpUserService
                     * @instance
                     * @param {js.chirp.user.api.IRegistrationRequest} request RegistrationRequest message or plain object
                     * @param {js.chirp.user.api.ChirpUserService.RegisterCallback} callback Node-style callback called with the error, if any, and Empty
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(ChirpUserService.prototype.register = function register(request, callback) {
                        return this.rpcCall(register, $root.js.chirp.user.api.RegistrationRequest, $root.google.protobuf.Empty, request, callback);
                    }, "name", { value: "Register" });

                    /**
                     * Calls Register.
                     * @function register
                     * @memberof js.chirp.user.api.ChirpUserService
                     * @instance
                     * @param {js.chirp.user.api.IRegistrationRequest} request RegistrationRequest message or plain object
                     * @returns {Promise<google.protobuf.Empty>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link js.chirp.user.api.ChirpUserService#login}.
                     * @memberof js.chirp.user.api.ChirpUserService
                     * @typedef LoginCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {js.chirp.user.api.Token} [response] Token
                     */

                    /**
                     * Calls Login.
                     * @function login
                     * @memberof js.chirp.user.api.ChirpUserService
                     * @instance
                     * @param {js.chirp.user.api.ILoginRequest} request LoginRequest message or plain object
                     * @param {js.chirp.user.api.ChirpUserService.LoginCallback} callback Node-style callback called with the error, if any, and Token
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(ChirpUserService.prototype.login = function login(request, callback) {
                        return this.rpcCall(login, $root.js.chirp.user.api.LoginRequest, $root.js.chirp.user.api.Token, request, callback);
                    }, "name", { value: "Login" });

                    /**
                     * Calls Login.
                     * @function login
                     * @memberof js.chirp.user.api.ChirpUserService
                     * @instance
                     * @param {js.chirp.user.api.ILoginRequest} request LoginRequest message or plain object
                     * @returns {Promise<js.chirp.user.api.Token>} Promise
                     * @variation 2
                     */

                    return ChirpUserService;
                })();

                return api;
            })();

            user.domain = (function() {

                /**
                 * Namespace domain.
                 * @memberof js.chirp.user
                 * @namespace
                 */
                var domain = {};

                domain.User = (function() {

                    /**
                     * Properties of a User.
                     * @memberof js.chirp.user.domain
                     * @interface IUser
                     * @property {string|null} [userName] User userName
                     * @property {string|null} [password] User password
                     */

                    /**
                     * Constructs a new User.
                     * @memberof js.chirp.user.domain
                     * @classdesc Represents a User.
                     * @implements IUser
                     * @constructor
                     * @param {js.chirp.user.domain.IUser=} [properties] Properties to set
                     */
                    function User(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * User userName.
                     * @member {string} userName
                     * @memberof js.chirp.user.domain.User
                     * @instance
                     */
                    User.prototype.userName = "";

                    /**
                     * User password.
                     * @member {string} password
                     * @memberof js.chirp.user.domain.User
                     * @instance
                     */
                    User.prototype.password = "";

                    /**
                     * Creates a new User instance using the specified properties.
                     * @function create
                     * @memberof js.chirp.user.domain.User
                     * @static
                     * @param {js.chirp.user.domain.IUser=} [properties] Properties to set
                     * @returns {js.chirp.user.domain.User} User instance
                     */
                    User.create = function create(properties) {
                        return new User(properties);
                    };

                    /**
                     * Encodes the specified User message. Does not implicitly {@link js.chirp.user.domain.User.verify|verify} messages.
                     * @function encode
                     * @memberof js.chirp.user.domain.User
                     * @static
                     * @param {js.chirp.user.domain.IUser} message User message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    User.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
                        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                        return writer;
                    };

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link js.chirp.user.domain.User.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof js.chirp.user.domain.User
                     * @static
                     * @param {js.chirp.user.domain.IUser} message User message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    User.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @function decode
                     * @memberof js.chirp.user.domain.User
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {js.chirp.user.domain.User} User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    User.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.chirp.user.domain.User();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.userName = reader.string();
                                break;
                            case 2:
                                message.password = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof js.chirp.user.domain.User
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {js.chirp.user.domain.User} User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    User.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a User message.
                     * @function verify
                     * @memberof js.chirp.user.domain.User
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    User.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            if (!$util.isString(message.userName))
                                return "userName: string expected";
                        if (message.password != null && message.hasOwnProperty("password"))
                            if (!$util.isString(message.password))
                                return "password: string expected";
                        return null;
                    };

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof js.chirp.user.domain.User
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {js.chirp.user.domain.User} User
                     */
                    User.fromObject = function fromObject(object) {
                        if (object instanceof $root.js.chirp.user.domain.User)
                            return object;
                        var message = new $root.js.chirp.user.domain.User();
                        if (object.userName != null)
                            message.userName = String(object.userName);
                        if (object.password != null)
                            message.password = String(object.password);
                        return message;
                    };

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof js.chirp.user.domain.User
                     * @static
                     * @param {js.chirp.user.domain.User} message User
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    User.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.userName = "";
                            object.password = "";
                        }
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            object.userName = message.userName;
                        if (message.password != null && message.hasOwnProperty("password"))
                            object.password = message.password;
                        return object;
                    };

                    /**
                     * Converts this User to JSON.
                     * @function toJSON
                     * @memberof js.chirp.user.domain.User
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    User.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return User;
                })();

                return domain;
            })();

            return user;
        })();

        return chirp;
    })();

    return js;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();