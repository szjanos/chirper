// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.example = (function() {

        /**
         * Namespace example.
         * @memberof com
         * @namespace
         */
        var example = {};

        example.ChirpRequest = (function() {

            /**
             * Properties of a ChirpRequest.
             * @memberof com.example
             * @interface IChirpRequest
             * @property {string|null} [userName] ChirpRequest userName
             * @property {string|null} [text] ChirpRequest text
             */

            /**
             * Constructs a new ChirpRequest.
             * @memberof com.example
             * @classdesc Represents a ChirpRequest.
             * @implements IChirpRequest
             * @constructor
             * @param {com.example.IChirpRequest=} [properties] Properties to set
             */
            function ChirpRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChirpRequest userName.
             * @member {string} userName
             * @memberof com.example.ChirpRequest
             * @instance
             */
            ChirpRequest.prototype.userName = "";

            /**
             * ChirpRequest text.
             * @member {string} text
             * @memberof com.example.ChirpRequest
             * @instance
             */
            ChirpRequest.prototype.text = "";

            /**
             * Creates a new ChirpRequest instance using the specified properties.
             * @function create
             * @memberof com.example.ChirpRequest
             * @static
             * @param {com.example.IChirpRequest=} [properties] Properties to set
             * @returns {com.example.ChirpRequest} ChirpRequest instance
             */
            ChirpRequest.create = function create(properties) {
                return new ChirpRequest(properties);
            };

            /**
             * Encodes the specified ChirpRequest message. Does not implicitly {@link com.example.ChirpRequest.verify|verify} messages.
             * @function encode
             * @memberof com.example.ChirpRequest
             * @static
             * @param {com.example.IChirpRequest} message ChirpRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChirpRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                return writer;
            };

            /**
             * Encodes the specified ChirpRequest message, length delimited. Does not implicitly {@link com.example.ChirpRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.example.ChirpRequest
             * @static
             * @param {com.example.IChirpRequest} message ChirpRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChirpRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChirpRequest message from the specified reader or buffer.
             * @function decode
             * @memberof com.example.ChirpRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.example.ChirpRequest} ChirpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChirpRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.ChirpRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userName = reader.string();
                        break;
                    case 2:
                        message.text = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChirpRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.example.ChirpRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.example.ChirpRequest} ChirpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChirpRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChirpRequest message.
             * @function verify
             * @memberof com.example.ChirpRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChirpRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                return null;
            };

            /**
             * Creates a ChirpRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof com.example.ChirpRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {com.example.ChirpRequest} ChirpRequest
             */
            ChirpRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.com.example.ChirpRequest)
                    return object;
                var message = new $root.com.example.ChirpRequest();
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.text != null)
                    message.text = String(object.text);
                return message;
            };

            /**
             * Creates a plain object from a ChirpRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof com.example.ChirpRequest
             * @static
             * @param {com.example.ChirpRequest} message ChirpRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChirpRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userName = "";
                    object.text = "";
                }
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                return object;
            };

            /**
             * Converts this ChirpRequest to JSON.
             * @function toJSON
             * @memberof com.example.ChirpRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChirpRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ChirpRequest;
        })();

        example.LikeRequest = (function() {

            /**
             * Properties of a LikeRequest.
             * @memberof com.example
             * @interface ILikeRequest
             * @property {string|null} [userName] LikeRequest userName
             * @property {string|null} [chirpId] LikeRequest chirpId
             */

            /**
             * Constructs a new LikeRequest.
             * @memberof com.example
             * @classdesc Represents a LikeRequest.
             * @implements ILikeRequest
             * @constructor
             * @param {com.example.ILikeRequest=} [properties] Properties to set
             */
            function LikeRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LikeRequest userName.
             * @member {string} userName
             * @memberof com.example.LikeRequest
             * @instance
             */
            LikeRequest.prototype.userName = "";

            /**
             * LikeRequest chirpId.
             * @member {string} chirpId
             * @memberof com.example.LikeRequest
             * @instance
             */
            LikeRequest.prototype.chirpId = "";

            /**
             * Creates a new LikeRequest instance using the specified properties.
             * @function create
             * @memberof com.example.LikeRequest
             * @static
             * @param {com.example.ILikeRequest=} [properties] Properties to set
             * @returns {com.example.LikeRequest} LikeRequest instance
             */
            LikeRequest.create = function create(properties) {
                return new LikeRequest(properties);
            };

            /**
             * Encodes the specified LikeRequest message. Does not implicitly {@link com.example.LikeRequest.verify|verify} messages.
             * @function encode
             * @memberof com.example.LikeRequest
             * @static
             * @param {com.example.ILikeRequest} message LikeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LikeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
                if (message.chirpId != null && Object.hasOwnProperty.call(message, "chirpId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.chirpId);
                return writer;
            };

            /**
             * Encodes the specified LikeRequest message, length delimited. Does not implicitly {@link com.example.LikeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.example.LikeRequest
             * @static
             * @param {com.example.ILikeRequest} message LikeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LikeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LikeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof com.example.LikeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.example.LikeRequest} LikeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LikeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.LikeRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userName = reader.string();
                        break;
                    case 2:
                        message.chirpId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LikeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.example.LikeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.example.LikeRequest} LikeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LikeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LikeRequest message.
             * @function verify
             * @memberof com.example.LikeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LikeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.chirpId != null && message.hasOwnProperty("chirpId"))
                    if (!$util.isString(message.chirpId))
                        return "chirpId: string expected";
                return null;
            };

            /**
             * Creates a LikeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof com.example.LikeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {com.example.LikeRequest} LikeRequest
             */
            LikeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.com.example.LikeRequest)
                    return object;
                var message = new $root.com.example.LikeRequest();
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.chirpId != null)
                    message.chirpId = String(object.chirpId);
                return message;
            };

            /**
             * Creates a plain object from a LikeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof com.example.LikeRequest
             * @static
             * @param {com.example.LikeRequest} message LikeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LikeRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userName = "";
                    object.chirpId = "";
                }
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.chirpId != null && message.hasOwnProperty("chirpId"))
                    object.chirpId = message.chirpId;
                return object;
            };

            /**
             * Converts this LikeRequest to JSON.
             * @function toJSON
             * @memberof com.example.LikeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LikeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LikeRequest;
        })();

        example.GetUserChirpsRequest = (function() {

            /**
             * Properties of a GetUserChirpsRequest.
             * @memberof com.example
             * @interface IGetUserChirpsRequest
             * @property {string|null} [userName] GetUserChirpsRequest userName
             */

            /**
             * Constructs a new GetUserChirpsRequest.
             * @memberof com.example
             * @classdesc Represents a GetUserChirpsRequest.
             * @implements IGetUserChirpsRequest
             * @constructor
             * @param {com.example.IGetUserChirpsRequest=} [properties] Properties to set
             */
            function GetUserChirpsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetUserChirpsRequest userName.
             * @member {string} userName
             * @memberof com.example.GetUserChirpsRequest
             * @instance
             */
            GetUserChirpsRequest.prototype.userName = "";

            /**
             * Creates a new GetUserChirpsRequest instance using the specified properties.
             * @function create
             * @memberof com.example.GetUserChirpsRequest
             * @static
             * @param {com.example.IGetUserChirpsRequest=} [properties] Properties to set
             * @returns {com.example.GetUserChirpsRequest} GetUserChirpsRequest instance
             */
            GetUserChirpsRequest.create = function create(properties) {
                return new GetUserChirpsRequest(properties);
            };

            /**
             * Encodes the specified GetUserChirpsRequest message. Does not implicitly {@link com.example.GetUserChirpsRequest.verify|verify} messages.
             * @function encode
             * @memberof com.example.GetUserChirpsRequest
             * @static
             * @param {com.example.IGetUserChirpsRequest} message GetUserChirpsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserChirpsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
                return writer;
            };

            /**
             * Encodes the specified GetUserChirpsRequest message, length delimited. Does not implicitly {@link com.example.GetUserChirpsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.example.GetUserChirpsRequest
             * @static
             * @param {com.example.IGetUserChirpsRequest} message GetUserChirpsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserChirpsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUserChirpsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof com.example.GetUserChirpsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.example.GetUserChirpsRequest} GetUserChirpsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserChirpsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.GetUserChirpsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetUserChirpsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.example.GetUserChirpsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.example.GetUserChirpsRequest} GetUserChirpsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserChirpsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetUserChirpsRequest message.
             * @function verify
             * @memberof com.example.GetUserChirpsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetUserChirpsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                return null;
            };

            /**
             * Creates a GetUserChirpsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof com.example.GetUserChirpsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {com.example.GetUserChirpsRequest} GetUserChirpsRequest
             */
            GetUserChirpsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.com.example.GetUserChirpsRequest)
                    return object;
                var message = new $root.com.example.GetUserChirpsRequest();
                if (object.userName != null)
                    message.userName = String(object.userName);
                return message;
            };

            /**
             * Creates a plain object from a GetUserChirpsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof com.example.GetUserChirpsRequest
             * @static
             * @param {com.example.GetUserChirpsRequest} message GetUserChirpsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUserChirpsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.userName = "";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                return object;
            };

            /**
             * Converts this GetUserChirpsRequest to JSON.
             * @function toJSON
             * @memberof com.example.GetUserChirpsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUserChirpsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetUserChirpsRequest;
        })();

        example.UserChirps = (function() {

            /**
             * Properties of a UserChirps.
             * @memberof com.example
             * @interface IUserChirps
             * @property {Array.<com.example.IUserChirps>|null} [UserChirps] UserChirps UserChirps
             */

            /**
             * Constructs a new UserChirps.
             * @memberof com.example
             * @classdesc Represents a UserChirps.
             * @implements IUserChirps
             * @constructor
             * @param {com.example.IUserChirps=} [properties] Properties to set
             */
            function UserChirps(properties) {
                this.UserChirps = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserChirps UserChirps.
             * @member {Array.<com.example.IUserChirps>} UserChirps
             * @memberof com.example.UserChirps
             * @instance
             */
            UserChirps.prototype.UserChirps = $util.emptyArray;

            /**
             * Creates a new UserChirps instance using the specified properties.
             * @function create
             * @memberof com.example.UserChirps
             * @static
             * @param {com.example.IUserChirps=} [properties] Properties to set
             * @returns {com.example.UserChirps} UserChirps instance
             */
            UserChirps.create = function create(properties) {
                return new UserChirps(properties);
            };

            /**
             * Encodes the specified UserChirps message. Does not implicitly {@link com.example.UserChirps.verify|verify} messages.
             * @function encode
             * @memberof com.example.UserChirps
             * @static
             * @param {com.example.IUserChirps} message UserChirps message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserChirps.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.UserChirps != null && message.UserChirps.length)
                    for (var i = 0; i < message.UserChirps.length; ++i)
                        $root.com.example.UserChirps.encode(message.UserChirps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UserChirps message, length delimited. Does not implicitly {@link com.example.UserChirps.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.example.UserChirps
             * @static
             * @param {com.example.IUserChirps} message UserChirps message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserChirps.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserChirps message from the specified reader or buffer.
             * @function decode
             * @memberof com.example.UserChirps
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.example.UserChirps} UserChirps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserChirps.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.UserChirps();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.UserChirps && message.UserChirps.length))
                            message.UserChirps = [];
                        message.UserChirps.push($root.com.example.UserChirps.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserChirps message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.example.UserChirps
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.example.UserChirps} UserChirps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserChirps.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserChirps message.
             * @function verify
             * @memberof com.example.UserChirps
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserChirps.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.UserChirps != null && message.hasOwnProperty("UserChirps")) {
                    if (!Array.isArray(message.UserChirps))
                        return "UserChirps: array expected";
                    for (var i = 0; i < message.UserChirps.length; ++i) {
                        var error = $root.com.example.UserChirps.verify(message.UserChirps[i]);
                        if (error)
                            return "UserChirps." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UserChirps message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof com.example.UserChirps
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {com.example.UserChirps} UserChirps
             */
            UserChirps.fromObject = function fromObject(object) {
                if (object instanceof $root.com.example.UserChirps)
                    return object;
                var message = new $root.com.example.UserChirps();
                if (object.UserChirps) {
                    if (!Array.isArray(object.UserChirps))
                        throw TypeError(".com.example.UserChirps.UserChirps: array expected");
                    message.UserChirps = [];
                    for (var i = 0; i < object.UserChirps.length; ++i) {
                        if (typeof object.UserChirps[i] !== "object")
                            throw TypeError(".com.example.UserChirps.UserChirps: object expected");
                        message.UserChirps[i] = $root.com.example.UserChirps.fromObject(object.UserChirps[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UserChirps message. Also converts values to other types if specified.
             * @function toObject
             * @memberof com.example.UserChirps
             * @static
             * @param {com.example.UserChirps} message UserChirps
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserChirps.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.UserChirps = [];
                if (message.UserChirps && message.UserChirps.length) {
                    object.UserChirps = [];
                    for (var j = 0; j < message.UserChirps.length; ++j)
                        object.UserChirps[j] = $root.com.example.UserChirps.toObject(message.UserChirps[j], options);
                }
                return object;
            };

            /**
             * Converts this UserChirps to JSON.
             * @function toJSON
             * @memberof com.example.UserChirps
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserChirps.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UserChirps;
        })();

        example.ChirpService = (function() {

            /**
             * Constructs a new ChirpService service.
             * @memberof com.example
             * @classdesc Represents a ChirpService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function ChirpService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (ChirpService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ChirpService;

            /**
             * Creates new ChirpService service using the specified rpc implementation.
             * @function create
             * @memberof com.example.ChirpService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {ChirpService} RPC service. Useful where requests and/or responses are streamed.
             */
            ChirpService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link com.example.ChirpService#chirp}.
             * @memberof com.example.ChirpService
             * @typedef ChirpCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {google.protobuf.Empty} [response] Empty
             */

            /**
             * Calls Chirp.
             * @function chirp
             * @memberof com.example.ChirpService
             * @instance
             * @param {com.example.IChirpRequest} request ChirpRequest message or plain object
             * @param {com.example.ChirpService.ChirpCallback} callback Node-style callback called with the error, if any, and Empty
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ChirpService.prototype.chirp = function chirp(request, callback) {
                return this.rpcCall(chirp, $root.com.example.ChirpRequest, $root.google.protobuf.Empty, request, callback);
            }, "name", { value: "Chirp" });

            /**
             * Calls Chirp.
             * @function chirp
             * @memberof com.example.ChirpService
             * @instance
             * @param {com.example.IChirpRequest} request ChirpRequest message or plain object
             * @returns {Promise<google.protobuf.Empty>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link com.example.ChirpService#like}.
             * @memberof com.example.ChirpService
             * @typedef LikeCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {google.protobuf.Empty} [response] Empty
             */

            /**
             * Calls Like.
             * @function like
             * @memberof com.example.ChirpService
             * @instance
             * @param {com.example.ILikeRequest} request LikeRequest message or plain object
             * @param {com.example.ChirpService.LikeCallback} callback Node-style callback called with the error, if any, and Empty
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ChirpService.prototype.like = function like(request, callback) {
                return this.rpcCall(like, $root.com.example.LikeRequest, $root.google.protobuf.Empty, request, callback);
            }, "name", { value: "Like" });

            /**
             * Calls Like.
             * @function like
             * @memberof com.example.ChirpService
             * @instance
             * @param {com.example.ILikeRequest} request LikeRequest message or plain object
             * @returns {Promise<google.protobuf.Empty>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link com.example.ChirpService#getUserChirps}.
             * @memberof com.example.ChirpService
             * @typedef GetUserChirpsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {com.example.UserChirps} [response] UserChirps
             */

            /**
             * Calls GetUserChirps.
             * @function getUserChirps
             * @memberof com.example.ChirpService
             * @instance
             * @param {com.example.IGetUserChirpsRequest} request GetUserChirpsRequest message or plain object
             * @param {com.example.ChirpService.GetUserChirpsCallback} callback Node-style callback called with the error, if any, and UserChirps
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ChirpService.prototype.getUserChirps = function getUserChirps(request, callback) {
                return this.rpcCall(getUserChirps, $root.com.example.GetUserChirpsRequest, $root.com.example.UserChirps, request, callback);
            }, "name", { value: "GetUserChirps" });

            /**
             * Calls GetUserChirps.
             * @function getUserChirps
             * @memberof com.example.ChirpService
             * @instance
             * @param {com.example.IGetUserChirpsRequest} request GetUserChirpsRequest message or plain object
             * @returns {Promise<com.example.UserChirps>} Promise
             * @variation 2
             */

            return ChirpService;
        })();

        return example;
    })();

    return com;
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

        chirp.persistence = (function() {

            /**
             * Namespace persistence.
             * @memberof js.chirp
             * @namespace
             */
            var persistence = {};

            persistence.Chirp = (function() {

                /**
                 * Properties of a Chirp.
                 * @memberof js.chirp.persistence
                 * @interface IChirp
                 * @property {string|null} [chirpId] Chirp chirpId
                 * @property {string|null} [text] Chirp text
                 * @property {number|null} [likes] Chirp likes
                 */

                /**
                 * Constructs a new Chirp.
                 * @memberof js.chirp.persistence
                 * @classdesc Represents a Chirp.
                 * @implements IChirp
                 * @constructor
                 * @param {js.chirp.persistence.IChirp=} [properties] Properties to set
                 */
                function Chirp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Chirp chirpId.
                 * @member {string} chirpId
                 * @memberof js.chirp.persistence.Chirp
                 * @instance
                 */
                Chirp.prototype.chirpId = "";

                /**
                 * Chirp text.
                 * @member {string} text
                 * @memberof js.chirp.persistence.Chirp
                 * @instance
                 */
                Chirp.prototype.text = "";

                /**
                 * Chirp likes.
                 * @member {number} likes
                 * @memberof js.chirp.persistence.Chirp
                 * @instance
                 */
                Chirp.prototype.likes = 0;

                /**
                 * Creates a new Chirp instance using the specified properties.
                 * @function create
                 * @memberof js.chirp.persistence.Chirp
                 * @static
                 * @param {js.chirp.persistence.IChirp=} [properties] Properties to set
                 * @returns {js.chirp.persistence.Chirp} Chirp instance
                 */
                Chirp.create = function create(properties) {
                    return new Chirp(properties);
                };

                /**
                 * Encodes the specified Chirp message. Does not implicitly {@link js.chirp.persistence.Chirp.verify|verify} messages.
                 * @function encode
                 * @memberof js.chirp.persistence.Chirp
                 * @static
                 * @param {js.chirp.persistence.IChirp} message Chirp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chirp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chirpId != null && Object.hasOwnProperty.call(message, "chirpId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.chirpId);
                    if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
                    if (message.likes != null && Object.hasOwnProperty.call(message, "likes"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.likes);
                    return writer;
                };

                /**
                 * Encodes the specified Chirp message, length delimited. Does not implicitly {@link js.chirp.persistence.Chirp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof js.chirp.persistence.Chirp
                 * @static
                 * @param {js.chirp.persistence.IChirp} message Chirp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chirp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Chirp message from the specified reader or buffer.
                 * @function decode
                 * @memberof js.chirp.persistence.Chirp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {js.chirp.persistence.Chirp} Chirp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chirp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.chirp.persistence.Chirp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.chirpId = reader.string();
                            break;
                        case 3:
                            message.text = reader.string();
                            break;
                        case 4:
                            message.likes = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Chirp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof js.chirp.persistence.Chirp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {js.chirp.persistence.Chirp} Chirp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chirp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Chirp message.
                 * @function verify
                 * @memberof js.chirp.persistence.Chirp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Chirp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.chirpId != null && message.hasOwnProperty("chirpId"))
                        if (!$util.isString(message.chirpId))
                            return "chirpId: string expected";
                    if (message.text != null && message.hasOwnProperty("text"))
                        if (!$util.isString(message.text))
                            return "text: string expected";
                    if (message.likes != null && message.hasOwnProperty("likes"))
                        if (!$util.isInteger(message.likes))
                            return "likes: integer expected";
                    return null;
                };

                /**
                 * Creates a Chirp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof js.chirp.persistence.Chirp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {js.chirp.persistence.Chirp} Chirp
                 */
                Chirp.fromObject = function fromObject(object) {
                    if (object instanceof $root.js.chirp.persistence.Chirp)
                        return object;
                    var message = new $root.js.chirp.persistence.Chirp();
                    if (object.chirpId != null)
                        message.chirpId = String(object.chirpId);
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.likes != null)
                        message.likes = object.likes | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Chirp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof js.chirp.persistence.Chirp
                 * @static
                 * @param {js.chirp.persistence.Chirp} message Chirp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Chirp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.chirpId = "";
                        object.text = "";
                        object.likes = 0;
                    }
                    if (message.chirpId != null && message.hasOwnProperty("chirpId"))
                        object.chirpId = message.chirpId;
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.likes != null && message.hasOwnProperty("likes"))
                        object.likes = message.likes;
                    return object;
                };

                /**
                 * Converts this Chirp to JSON.
                 * @function toJSON
                 * @memberof js.chirp.persistence.Chirp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Chirp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Chirp;
            })();

            persistence.Chirped = (function() {

                /**
                 * Properties of a Chirped.
                 * @memberof js.chirp.persistence
                 * @interface IChirped
                 * @property {js.chirp.persistence.IChirp|null} [chirp] Chirped chirp
                 */

                /**
                 * Constructs a new Chirped.
                 * @memberof js.chirp.persistence
                 * @classdesc Represents a Chirped.
                 * @implements IChirped
                 * @constructor
                 * @param {js.chirp.persistence.IChirped=} [properties] Properties to set
                 */
                function Chirped(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Chirped chirp.
                 * @member {js.chirp.persistence.IChirp|null|undefined} chirp
                 * @memberof js.chirp.persistence.Chirped
                 * @instance
                 */
                Chirped.prototype.chirp = null;

                /**
                 * Creates a new Chirped instance using the specified properties.
                 * @function create
                 * @memberof js.chirp.persistence.Chirped
                 * @static
                 * @param {js.chirp.persistence.IChirped=} [properties] Properties to set
                 * @returns {js.chirp.persistence.Chirped} Chirped instance
                 */
                Chirped.create = function create(properties) {
                    return new Chirped(properties);
                };

                /**
                 * Encodes the specified Chirped message. Does not implicitly {@link js.chirp.persistence.Chirped.verify|verify} messages.
                 * @function encode
                 * @memberof js.chirp.persistence.Chirped
                 * @static
                 * @param {js.chirp.persistence.IChirped} message Chirped message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chirped.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chirp != null && Object.hasOwnProperty.call(message, "chirp"))
                        $root.js.chirp.persistence.Chirp.encode(message.chirp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Chirped message, length delimited. Does not implicitly {@link js.chirp.persistence.Chirped.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof js.chirp.persistence.Chirped
                 * @static
                 * @param {js.chirp.persistence.IChirped} message Chirped message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Chirped.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Chirped message from the specified reader or buffer.
                 * @function decode
                 * @memberof js.chirp.persistence.Chirped
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {js.chirp.persistence.Chirped} Chirped
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chirped.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.chirp.persistence.Chirped();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.chirp = $root.js.chirp.persistence.Chirp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Chirped message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof js.chirp.persistence.Chirped
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {js.chirp.persistence.Chirped} Chirped
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Chirped.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Chirped message.
                 * @function verify
                 * @memberof js.chirp.persistence.Chirped
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Chirped.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.chirp != null && message.hasOwnProperty("chirp")) {
                        var error = $root.js.chirp.persistence.Chirp.verify(message.chirp);
                        if (error)
                            return "chirp." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Chirped message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof js.chirp.persistence.Chirped
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {js.chirp.persistence.Chirped} Chirped
                 */
                Chirped.fromObject = function fromObject(object) {
                    if (object instanceof $root.js.chirp.persistence.Chirped)
                        return object;
                    var message = new $root.js.chirp.persistence.Chirped();
                    if (object.chirp != null) {
                        if (typeof object.chirp !== "object")
                            throw TypeError(".js.chirp.persistence.Chirped.chirp: object expected");
                        message.chirp = $root.js.chirp.persistence.Chirp.fromObject(object.chirp);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Chirped message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof js.chirp.persistence.Chirped
                 * @static
                 * @param {js.chirp.persistence.Chirped} message Chirped
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Chirped.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.chirp = null;
                    if (message.chirp != null && message.hasOwnProperty("chirp"))
                        object.chirp = $root.js.chirp.persistence.Chirp.toObject(message.chirp, options);
                    return object;
                };

                /**
                 * Converts this Chirped to JSON.
                 * @function toJSON
                 * @memberof js.chirp.persistence.Chirped
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Chirped.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Chirped;
            })();

            persistence.Liked = (function() {

                /**
                 * Properties of a Liked.
                 * @memberof js.chirp.persistence
                 * @interface ILiked
                 * @property {string|null} [chirpId] Liked chirpId
                 */

                /**
                 * Constructs a new Liked.
                 * @memberof js.chirp.persistence
                 * @classdesc Represents a Liked.
                 * @implements ILiked
                 * @constructor
                 * @param {js.chirp.persistence.ILiked=} [properties] Properties to set
                 */
                function Liked(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Liked chirpId.
                 * @member {string} chirpId
                 * @memberof js.chirp.persistence.Liked
                 * @instance
                 */
                Liked.prototype.chirpId = "";

                /**
                 * Creates a new Liked instance using the specified properties.
                 * @function create
                 * @memberof js.chirp.persistence.Liked
                 * @static
                 * @param {js.chirp.persistence.ILiked=} [properties] Properties to set
                 * @returns {js.chirp.persistence.Liked} Liked instance
                 */
                Liked.create = function create(properties) {
                    return new Liked(properties);
                };

                /**
                 * Encodes the specified Liked message. Does not implicitly {@link js.chirp.persistence.Liked.verify|verify} messages.
                 * @function encode
                 * @memberof js.chirp.persistence.Liked
                 * @static
                 * @param {js.chirp.persistence.ILiked} message Liked message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Liked.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chirpId != null && Object.hasOwnProperty.call(message, "chirpId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.chirpId);
                    return writer;
                };

                /**
                 * Encodes the specified Liked message, length delimited. Does not implicitly {@link js.chirp.persistence.Liked.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof js.chirp.persistence.Liked
                 * @static
                 * @param {js.chirp.persistence.ILiked} message Liked message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Liked.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Liked message from the specified reader or buffer.
                 * @function decode
                 * @memberof js.chirp.persistence.Liked
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {js.chirp.persistence.Liked} Liked
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Liked.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.chirp.persistence.Liked();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.chirpId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Liked message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof js.chirp.persistence.Liked
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {js.chirp.persistence.Liked} Liked
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Liked.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Liked message.
                 * @function verify
                 * @memberof js.chirp.persistence.Liked
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Liked.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.chirpId != null && message.hasOwnProperty("chirpId"))
                        if (!$util.isString(message.chirpId))
                            return "chirpId: string expected";
                    return null;
                };

                /**
                 * Creates a Liked message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof js.chirp.persistence.Liked
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {js.chirp.persistence.Liked} Liked
                 */
                Liked.fromObject = function fromObject(object) {
                    if (object instanceof $root.js.chirp.persistence.Liked)
                        return object;
                    var message = new $root.js.chirp.persistence.Liked();
                    if (object.chirpId != null)
                        message.chirpId = String(object.chirpId);
                    return message;
                };

                /**
                 * Creates a plain object from a Liked message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof js.chirp.persistence.Liked
                 * @static
                 * @param {js.chirp.persistence.Liked} message Liked
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Liked.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.chirpId = "";
                    if (message.chirpId != null && message.hasOwnProperty("chirpId"))
                        object.chirpId = message.chirpId;
                    return object;
                };

                /**
                 * Converts this Liked to JSON.
                 * @function toJSON
                 * @memberof js.chirp.persistence.Liked
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Liked.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Liked;
            })();

            persistence.UserChirps = (function() {

                /**
                 * Properties of a UserChirps.
                 * @memberof js.chirp.persistence
                 * @interface IUserChirps
                 * @property {Array.<js.chirp.persistence.IChirp>|null} [chirps] UserChirps chirps
                 */

                /**
                 * Constructs a new UserChirps.
                 * @memberof js.chirp.persistence
                 * @classdesc Represents a UserChirps.
                 * @implements IUserChirps
                 * @constructor
                 * @param {js.chirp.persistence.IUserChirps=} [properties] Properties to set
                 */
                function UserChirps(properties) {
                    this.chirps = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserChirps chirps.
                 * @member {Array.<js.chirp.persistence.IChirp>} chirps
                 * @memberof js.chirp.persistence.UserChirps
                 * @instance
                 */
                UserChirps.prototype.chirps = $util.emptyArray;

                /**
                 * Creates a new UserChirps instance using the specified properties.
                 * @function create
                 * @memberof js.chirp.persistence.UserChirps
                 * @static
                 * @param {js.chirp.persistence.IUserChirps=} [properties] Properties to set
                 * @returns {js.chirp.persistence.UserChirps} UserChirps instance
                 */
                UserChirps.create = function create(properties) {
                    return new UserChirps(properties);
                };

                /**
                 * Encodes the specified UserChirps message. Does not implicitly {@link js.chirp.persistence.UserChirps.verify|verify} messages.
                 * @function encode
                 * @memberof js.chirp.persistence.UserChirps
                 * @static
                 * @param {js.chirp.persistence.IUserChirps} message UserChirps message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserChirps.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.chirps != null && message.chirps.length)
                        for (var i = 0; i < message.chirps.length; ++i)
                            $root.js.chirp.persistence.Chirp.encode(message.chirps[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified UserChirps message, length delimited. Does not implicitly {@link js.chirp.persistence.UserChirps.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof js.chirp.persistence.UserChirps
                 * @static
                 * @param {js.chirp.persistence.IUserChirps} message UserChirps message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserChirps.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UserChirps message from the specified reader or buffer.
                 * @function decode
                 * @memberof js.chirp.persistence.UserChirps
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {js.chirp.persistence.UserChirps} UserChirps
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserChirps.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.js.chirp.persistence.UserChirps();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.chirps && message.chirps.length))
                                message.chirps = [];
                            message.chirps.push($root.js.chirp.persistence.Chirp.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UserChirps message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof js.chirp.persistence.UserChirps
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {js.chirp.persistence.UserChirps} UserChirps
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserChirps.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UserChirps message.
                 * @function verify
                 * @memberof js.chirp.persistence.UserChirps
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserChirps.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.chirps != null && message.hasOwnProperty("chirps")) {
                        if (!Array.isArray(message.chirps))
                            return "chirps: array expected";
                        for (var i = 0; i < message.chirps.length; ++i) {
                            var error = $root.js.chirp.persistence.Chirp.verify(message.chirps[i]);
                            if (error)
                                return "chirps." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a UserChirps message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof js.chirp.persistence.UserChirps
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {js.chirp.persistence.UserChirps} UserChirps
                 */
                UserChirps.fromObject = function fromObject(object) {
                    if (object instanceof $root.js.chirp.persistence.UserChirps)
                        return object;
                    var message = new $root.js.chirp.persistence.UserChirps();
                    if (object.chirps) {
                        if (!Array.isArray(object.chirps))
                            throw TypeError(".js.chirp.persistence.UserChirps.chirps: array expected");
                        message.chirps = [];
                        for (var i = 0; i < object.chirps.length; ++i) {
                            if (typeof object.chirps[i] !== "object")
                                throw TypeError(".js.chirp.persistence.UserChirps.chirps: object expected");
                            message.chirps[i] = $root.js.chirp.persistence.Chirp.fromObject(object.chirps[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UserChirps message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof js.chirp.persistence.UserChirps
                 * @static
                 * @param {js.chirp.persistence.UserChirps} message UserChirps
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserChirps.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.chirps = [];
                    if (message.chirps && message.chirps.length) {
                        object.chirps = [];
                        for (var j = 0; j < message.chirps.length; ++j)
                            object.chirps[j] = $root.js.chirp.persistence.Chirp.toObject(message.chirps[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this UserChirps to JSON.
                 * @function toJSON
                 * @memberof js.chirp.persistence.UserChirps
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserChirps.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UserChirps;
            })();

            return persistence;
        })();

        return chirp;
    })();

    return js;
})();