/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export namespace google {
    export namespace protobuf {
        // The protocol compiler can output a FileDescriptorSet containing the .proto
        // files it parses.
        export interface FileDescriptorSet {
            file?: protobuf.FileDescriptorProto[];
        }
        // Describes a complete .proto file.
        export interface FileDescriptorProto {
            // file name, relative to root of source tree
            name?: string;
            // file name, relative to root of source tree
            package?: string;
            // Names of files imported by this file.
            dependency?: string[];
            // Indexes of the public imported files in the dependency list above.
            publicDependency?: number[];
            // Indexes of the weak imported files in the dependency list.
        // For Google-internal migration only. Do not use.
            weakDependency?: number[];
            // All top-level definitions in this file.
            messageType?: protobuf.DescriptorProto[];
            enumType?: protobuf.EnumDescriptorProto[];
            service?: protobuf.ServiceDescriptorProto[];
            extension?: protobuf.FieldDescriptorProto[];
            options?: protobuf.FileOptions;
            // This field contains optional information about the original source code.
        // You may safely remove this entire field without harming runtime
        // functionality of the descriptors -- the information is needed only by
        // development tools.
            sourceCodeInfo?: protobuf.SourceCodeInfo;
            // The syntax of the proto file.
        // The supported values are &quot;proto2&quot; and &quot;proto3&quot;.
            syntax?: string;
        }
        // Describes a message type.
        export interface DescriptorProto {
            name?: string;
            field?: protobuf.FieldDescriptorProto[];
            extension?: protobuf.FieldDescriptorProto[];
            nestedType?: protobuf.DescriptorProto[];
            enumType?: protobuf.EnumDescriptorProto[];
            extensionRange?: DescriptorProto.ExtensionRange[];
            oneofDecl?: protobuf.OneofDescriptorProto[];
            options?: protobuf.MessageOptions;
            reservedRange?: DescriptorProto.ReservedRange[];
            // Reserved field names, which may not be used by fields in the same message.
        // A given name may only be reserved once.
            reservedName?: string[];
        }
        export namespace DescriptorProto {
            // Describes a message type.
            export interface ExtensionRange {
                start?: number;
                end?: number;
            }
            // Range of reserved tag numbers. Reserved tag numbers may not be used by
            // fields or extension ranges in the same message. Reserved ranges may
            // not overlap.
            export interface ReservedRange {
                // Inclusive.
                start?: number;
                // Inclusive.
                end?: number;
            }
        }
        // Describes a field within a message.
        export interface FieldDescriptorProto {
            name?: string;
            number?: number;
            label?: FieldDescriptorProto.Label;
            // If type_name is set, this need not be set.  If both this and type_name
        // are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
            type?: FieldDescriptorProto.Type;
            // For message and enum types, this is the name of the type.  If the name
        // starts with a &#x27;.&#x27;, it is fully-qualified.  Otherwise, C++-like scoping
        // rules are used to find the type (i.e. first the nested types within this
        // message are searched, then within the parent, on up to the root
        // namespace).
            typeName?: string;
            // For extensions, this is the name of the type being extended.  It is
        // resolved in the same manner as type_name.
            extendee?: string;
            // For numeric types, contains the original text representation of the value.
        // For booleans, &quot;true&quot; or &quot;false&quot;.
        // For strings, contains the default text contents (not escaped in any way).
        // For bytes, contains the C escaped value.  All bytes &gt;&#x3D; 128 are escaped.
        // TODO(kenton):  Base-64 encode?
            defaultValue?: string;
            // If set, gives the index of a oneof in the containing type&#x27;s oneof_decl
        // list.  This field is a member of that oneof.
            oneofIndex?: number;
            // JSON name of this field. The value is set by protocol compiler. If the
        // user has set a &quot;json_name&quot; option on this field, that option&#x27;s value
        // will be used. Otherwise, it&#x27;s deduced from the field&#x27;s name by converting
        // it to camelCase.
            jsonName?: string;
            options?: protobuf.FieldOptions;
        }
        export namespace FieldDescriptorProto {
            // Describes a field within a message.
            export enum Type {
                /* 0 is reserved for errors.
            // Order is weird for historical reasons. */
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                /* Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
            // negative values are likely. */
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                /* Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
            // negative values are likely. */
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                /* Tag-delimited aggregate. */
                TYPE_GROUP = 10,
                /* Tag-delimited aggregate. */
                TYPE_MESSAGE = 11,
                /* New in version 2. */
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                /* Uses ZigZag encoding. */
                TYPE_SINT32 = 17,
                /* Uses ZigZag encoding. */
                TYPE_SINT64 = 18,
            }
            export enum Label {
                /* 0 is reserved for errors */
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3,
            }
        }
        // Describes a oneof.
        export interface OneofDescriptorProto {
            name?: string;
            options?: protobuf.OneofOptions;
        }
        // Describes an enum type.
        export interface EnumDescriptorProto {
            name?: string;
            value?: protobuf.EnumValueDescriptorProto[];
            options?: protobuf.EnumOptions;
        }
        // Describes a value within an enum.
        export interface EnumValueDescriptorProto {
            name?: string;
            number?: number;
            options?: protobuf.EnumValueOptions;
        }
        // Describes a service.
        export interface ServiceDescriptorProto {
            name?: string;
            method?: protobuf.MethodDescriptorProto[];
            options?: protobuf.ServiceOptions;
        }
        // Describes a method of a service.
        export interface MethodDescriptorProto {
            name?: string;
            // Input and output type names.  These are resolved in the same way as
        // FieldDescriptorProto.type_name, but must refer to a message type.
            inputType?: string;
            outputType?: string;
            options?: protobuf.MethodOptions;
            // Identifies if client streams multiple client messages
            clientStreaming?: boolean;
            // Identifies if server streams multiple server messages
            serverStreaming?: boolean;
        }
        export interface FileOptions {
            // Sets the Java package where classes generated from this .proto will be
        // placed.  By default, the proto package is used, but this is often
        // inappropriate because proto packages do not normally start with backwards
        // domain names.
            javaPackage?: string;
            // If set, all the classes from the .proto file are wrapped in a single
        // outer class with the given name.  This applies to both Proto1
        // (equivalent to the old &quot;--one_java_file&quot; option) and Proto2 (where
        // a .proto always translates to a single class, but you may want to
        // explicitly choose the class name).
            javaOuterClassname?: string;
            // If set true, then the Java code generator will generate a separate .java
        // file for each top-level message, enum, and service defined in the .proto
        // file.  Thus, these types will *not* be nested inside the outer class
        // named by java_outer_classname.  However, the outer class will still be
        // generated to contain the file&#x27;s getDescriptor() method as well as any
        // top-level extensions defined in the file.
            javaMultipleFiles?: boolean;
            // This option does nothing.
            javaGenerateEqualsAndHash?: boolean;
            // If set true, then the Java2 code generator will generate code that
        // throws an exception whenever an attempt is made to assign a non-UTF-8
        // byte sequence to a string field.
        // Message reflection will do the same.
        // However, an extension field still accepts non-UTF-8 byte sequences.
        // This option has no effect on when used with the lite runtime.
            javaStringCheckUtf8?: boolean;
            optimizeFor?: FileOptions.OptimizeMode;
            // Sets the Go package where structs generated from this .proto will be
        // placed. If omitted, the Go package will be derived from the following:
        // - The basename of the package import path, if provided.
        // - Otherwise, the package statement in the .proto file, if present.
        // - Otherwise, the basename of the .proto file, without extension.
            goPackage?: string;
            // Should generic services be generated in each language?  &quot;Generic&quot; services
        // are not specific to any particular RPC system.  They are generated by the
        // main code generators in each language (without additional plugins).
        // Generic services were the only kind of service generation supported by
        // early versions of google.protobuf.
        // 
        // Generic services are now considered deprecated in favor of using plugins
        // that generate code specific to your particular RPC system.  Therefore,
        // these default to false.  Old code which depends on generic services should
        // explicitly set them to true.
            ccGenericServices?: boolean;
            javaGenericServices?: boolean;
            pyGenericServices?: boolean;
            // Is this file deprecated?
        // Depending on the target platform, this can emit Deprecated annotations
        // for everything in the file, or it will be completely ignored; in the very
        // least, this is a formalization for deprecating files.
            deprecated?: boolean;
            // Enables the use of arenas for the proto messages in this file. This applies
        // only to generated classes for C++.
            ccEnableArenas?: boolean;
            // Sets the objective c class prefix which is prepended to all objective c
        // generated classes from this .proto. There is no default.
            objcClassPrefix?: string;
            // Namespace for generated classes; defaults to the package.
            csharpNamespace?: string;
            // The parser stores options it doesn&#x27;t recognize here. See above.
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export namespace FileOptions {
            // Generated classes can be optimized for speed or code size.
            export enum OptimizeMode {
                /* Generate complete code for parsing, serialization,
            // etc. */
                SPEED = 1,
                /* Generate complete code for parsing, serialization,
            // etc. */
                CODE_SIZE = 2,
                /* Use ReflectionOps to implement these methods. */
                LITE_RUNTIME = 3,
            }
        }
        export interface MessageOptions {
            // Set true to use the old proto1 MessageSet wire format for extensions.
        // This is provided for backwards-compatibility with the MessageSet wire
        // format.  You should not use this for any other reason:  It&#x27;s less
        // efficient, has fewer features, and is more complicated.
        // 
        // The message must be defined exactly as follows:
        // message Foo {
        // option message_set_wire_format &#x3D; true;
        // extensions 4 to max;
        // }
        // Note that the message cannot have any defined fields; MessageSets only
        // have extensions.
        // 
        // All extensions of your type must be singular messages; e.g. they cannot
        // be int32s, enums, or repeated messages.
        // 
        // Because this is an option, the above two restrictions are not enforced by
        // the protocol compiler.
            messageSetWireFormat?: boolean;
            // Disables the generation of the standard &quot;descriptor()&quot; accessor, which can
        // conflict with a field of the same name.  This is meant to make migration
        // from proto1 easier; new code should avoid fields named &quot;descriptor&quot;.
            noStandardDescriptorAccessor?: boolean;
            // Is this message deprecated?
        // Depending on the target platform, this can emit Deprecated annotations
        // for the message, or it will be completely ignored; in the very least,
        // this is a formalization for deprecating messages.
            deprecated?: boolean;
            // Whether the message is an automatically generated map entry type for the
        // maps field.
        // 
        // For maps fields:
        // map&lt;KeyType, ValueType&gt; map_field &#x3D; 1;
        // The parsed descriptor looks like:
        // message MapFieldEntry {
        // option map_entry &#x3D; true;
        // optional KeyType key &#x3D; 1;
        // optional ValueType value &#x3D; 2;
        // }
        // repeated MapFieldEntry map_field &#x3D; 1;
        // 
        // Implementations may choose not to generate the map_entry&#x3D;true message, but
        // use a native map in the target language to hold the keys and values.
        // The reflection APIs in such implementions still need to work as
        // if the field is a repeated message field.
        // 
        // NOTE: Do not set the option in .proto files. Always use the maps syntax
        // instead. The option should only be implicitly set by the proto compiler
        // parser.
            mapEntry?: boolean;
            // The parser stores options it doesn&#x27;t recognize here. See above.
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface FieldOptions {
            // The ctype option instructs the C++ code generator to use a different
        // representation of the field than it normally would.  See the specific
        // options below.  This option is not yet implemented in the open source
        // release -- sorry, we&#x27;ll try to include it in a future version!
            ctype?: FieldOptions.CType;
            // The packed option can be enabled for repeated primitive fields to enable
        // a more efficient representation on the wire. Rather than repeatedly
        // writing the tag and type for each element, the entire array is encoded as
        // a single length-delimited blob. In proto3, only explicit setting it to
        // false will avoid using packed encoding.
            packed?: boolean;
            // The jstype option determines the JavaScript type used for values of the
        // field.  The option is permitted only for 64 bit integral and fixed types
        // (int64, uint64, sint64, fixed64, sfixed64).  By default these types are
        // represented as JavaScript strings.  This avoids loss of precision that can
        // happen when a large value is converted to a floating point JavaScript
        // numbers.  Specifying JS_NUMBER for the jstype causes the generated
        // JavaScript code to use the JavaScript &quot;number&quot; type instead of strings.
        // This option is an enum to permit additional types to be added,
        // e.g. goog.math.Integer.
            jstype?: FieldOptions.JSType;
            // Should this field be parsed lazily?  Lazy applies only to message-type
        // fields.  It means that when the outer message is initially parsed, the
        // inner message&#x27;s contents will not be parsed but instead stored in encoded
        // form.  The inner message will actually be parsed when it is first accessed.
        // 
        // This is only a hint.  Implementations are free to choose whether to use
        // eager or lazy parsing regardless of the value of this option.  However,
        // setting this option true suggests that the protocol author believes that
        // using lazy parsing on this field is worth the additional bookkeeping
        // overhead typically needed to implement it.
        // 
        // This option does not affect the public interface of any generated code;
        // all method signatures remain the same.  Furthermore, thread-safety of the
        // interface is not affected by this option; const methods remain safe to
        // call from multiple threads concurrently, while non-const methods continue
        // to require exclusive access.
        // 
        // 
        // Note that implementations may choose not to check required fields within
        // a lazy sub-message.  That is, calling IsInitialized() on the outer message
        // may return true even if the inner message has missing required fields.
        // This is necessary because otherwise the inner message would have to be
        // parsed in order to perform the check, defeating the purpose of lazy
        // parsing.  An implementation which chooses not to check required fields
        // must be consistent about it.  That is, for any particular sub-message, the
        // implementation must either *always* check its required fields, or *never*
        // check its required fields, regardless of whether or not the message has
        // been parsed.
            lazy?: boolean;
            // Is this field deprecated?
        // Depending on the target platform, this can emit Deprecated annotations
        // for accessors, or it will be completely ignored; in the very least, this
        // is a formalization for deprecating fields.
            deprecated?: boolean;
            // For Google-internal migration only. Do not use.
            weak?: boolean;
            // The parser stores options it doesn&#x27;t recognize here. See above.
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export namespace FieldOptions {
            export enum CType {
                /* Default mode. */
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2,
            }
            export enum JSType {
                /* Use the default type. */
                JS_NORMAL = 0,
                /* Use JavaScript strings. */
                JS_STRING = 1,
                /* Use JavaScript numbers. */
                JS_NUMBER = 2,
            }
        }
        export interface OneofOptions {
            // The parser stores options it doesn&#x27;t recognize here. See above.
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface EnumOptions {
            // Set this option to true to allow mapping different tag names to the same
        // value.
            allowAlias?: boolean;
            // Is this enum deprecated?
        // Depending on the target platform, this can emit Deprecated annotations
        // for the enum, or it will be completely ignored; in the very least, this
        // is a formalization for deprecating enums.
            deprecated?: boolean;
            // The parser stores options it doesn&#x27;t recognize here. See above.
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface EnumValueOptions {
            // Is this enum value deprecated?
        // Depending on the target platform, this can emit Deprecated annotations
        // for the enum value, or it will be completely ignored; in the very least,
        // this is a formalization for deprecating enum values.
            deprecated?: boolean;
            // The parser stores options it doesn&#x27;t recognize here. See above.
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface ServiceOptions {
            // Is this service deprecated?
        // Depending on the target platform, this can emit Deprecated annotations
        // for the service, or it will be completely ignored; in the very least,
        // this is a formalization for deprecating services.
            deprecated?: boolean;
            // The parser stores options it doesn&#x27;t recognize here. See above.
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface MethodOptions {
            // Is this method deprecated?
        // Depending on the target platform, this can emit Deprecated annotations
        // for the method, or it will be completely ignored; in the very least,
        // this is a formalization for deprecating methods.
            deprecated?: boolean;
            idempotencyLevel?: MethodOptions.IdempotencyLevel;
            // The parser stores options it doesn&#x27;t recognize here. See above.
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export namespace MethodOptions {
            // Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
            // or neither? HTTP based RPC implementation may choose GET verb for safe
            // methods, and PUT verb for idempotent methods instead of the default POST.
            export enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                /* implies idempotent */
                NO_SIDE_EFFECTS = 1,
                /* implies idempotent */
                IDEMPOTENT = 2,
            }
        }
        // A message representing a option the parser does not recognize. This only
        // appears in options protos created by the compiler::Parser class.
        // DescriptorPool resolves these when building Descriptor objects. Therefore,
        // options protos in descriptor objects (e.g. returned by Descriptor::options(),
        // or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
        // in them.
        export interface UninterpretedOption {
            name?: UninterpretedOption.NamePart[];
            // The value of the uninterpreted option, in whatever type the tokenizer
        // identified it as during parsing. Exactly one of these should be set.
            identifierValue?: string;
            positiveIntValue?: number;
            negativeIntValue?: number;
            doubleValue?: number;
            stringValue?: Uint8Array;
            aggregateValue?: string;
        }
        export namespace UninterpretedOption {
            // A message representing a option the parser does not recognize. This only
        // appears in options protos created by the compiler::Parser class.
        // DescriptorPool resolves these when building Descriptor objects. Therefore,
        // options protos in descriptor objects (e.g. returned by Descriptor::options(),
        // or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
        // in them.
            // The name of the uninterpreted option.  Each string represents a segment in
            // a dot-separated name.  is_extension is true iff a segment represents an
            // extension (denoted with parentheses in options specs in .proto files).
            // E.g.,{ [&quot;foo&quot;, false], [&quot;bar.baz&quot;, true], [&quot;qux&quot;, false] } represents
            // &quot;foo.(bar.baz).qux&quot;.
            export interface NamePart {
                namePart?: string;
                isExtension?: boolean;
            }
        }
        // Encapsulates information about the original source file from which a
        // FileDescriptorProto was generated.
        export interface SourceCodeInfo {
            // A Location identifies a piece of source code in a .proto file which
        // corresponds to a particular definition.  This information is intended
        // to be useful to IDEs, code indexers, documentation generators, and similar
        // tools.
        // 
        // For example, say we have a file like:
        // message Foo {
        // optional string foo &#x3D; 1;
        // }
        // Let&#x27;s look at just the field definition:
        // optional string foo &#x3D; 1;
        // ^       ^^     ^^  ^  ^^^
        // a       bc     de  f  ghi
        // We have the following locations:
        // span   path               represents
        // [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
        // [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
        // [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
        // [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
        // [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
        // 
        // Notes:
        // - A location may refer to a repeated field itself (i.e. not to any
        // particular index within it).  This is used whenever a set of elements are
        // logically enclosed in a single code segment.  For example, an entire
        // extend block (possibly containing multiple extension definitions) will
        // have an outer location whose path refers to the &quot;extensions&quot; repeated
        // field without an index.
        // - Multiple locations may have the same path.  This happens when a single
        // logical declaration is spread out across multiple places.  The most
        // obvious example is the &quot;extend&quot; block again -- there may be multiple
        // extend blocks in the same scope, each of which will have the same path.
        // - A location&#x27;s span is not always a subset of its parent&#x27;s span.  For
        // example, the &quot;extendee&quot; of an extension declaration appears at the
        // beginning of the &quot;extend&quot; block and is shared by all extensions within
        // the block.
        // - Just because a location&#x27;s span is a subset of some other location&#x27;s span
        // does not mean that it is a descendent.  For example, a &quot;group&quot; defines
        // both a type and a field in a single declaration.  Thus, the locations
        // corresponding to the type and field and their components will overlap.
        // - Code which tries to interpret locations should probably be designed to
        // ignore those that it doesn&#x27;t understand, as more types of locations could
        // be recorded in the future.
            location?: SourceCodeInfo.Location[];
        }
        export namespace SourceCodeInfo {
            // Encapsulates information about the original source file from which a
        // FileDescriptorProto was generated.
            export interface Location {
                // Identifies which part of the FileDescriptorProto was defined at this
            // location.
            // 
            // Each element is a field number or an index.  They form a path from
            // the root FileDescriptorProto to the place where the definition.  For
            // example, this path:
            // [ 4, 3, 2, 7, 1 ]
            // refers to:
            // file.message_type(3)  // 4, 3
            // .field(7)         // 2, 7
            // .name()           // 1
            // This is because FileDescriptorProto.message_type has field number 4:
            // repeated DescriptorProto message_type &#x3D; 4;
            // and DescriptorProto.field has field number 2:
            // repeated FieldDescriptorProto field &#x3D; 2;
            // and FieldDescriptorProto.name has field number 1:
            // optional string name &#x3D; 1;
            // 
            // Thus, the above path gives the location of a field name.  If we removed
            // the last element:
            // [ 4, 3, 2, 7 ]
            // this path refers to the whole field declaration (from the beginning
            // of the label to the terminating semicolon).
                path?: number[];
                // Always has exactly three or four elements: start line, start column,
            // end line (optional, otherwise assumed same as start line), end column.
            // These are packed into a single field for efficiency.  Note that line
            // and column numbers are zero-based -- typically you will want to add
            // 1 to each before displaying to a user.
                span?: number[];
                // If this SourceCodeInfo represents a complete declaration, these are any
            // comments appearing before and after the declaration which appear to be
            // attached to the declaration.
            // 
            // A series of line comments appearing on consecutive lines, with no other
            // tokens appearing on those lines, will be treated as a single comment.
            // 
            // leading_detached_comments will keep paragraphs of comments that appear
            // before (but not connected to) the current element. Each paragraph,
            // separated by empty lines, will be one comment element in the repeated
            // field.
            // 
            // Only the comment content is provided; comment markers (e.g. //) are
            // stripped out.  For block comments, leading whitespace and an asterisk
            // will be stripped from the beginning of each line other than the first.
            // Newlines are included in the output.
            // 
            // Examples:
            // 
            // optional int32 foo &#x3D; 1;  // Comment attached to foo.
            // // Comment attached to bar.
            // optional int32 bar &#x3D; 2;
            // 
            // optional string baz &#x3D; 3;
            // // Comment attached to baz.
            // // Another line attached to baz.
            // 
            // // Comment attached to qux.
            // //
            // // Another line attached to qux.
            // optional double qux &#x3D; 4;
            // 
            // // Detached comment for corge. This is not leading or trailing comments
            // // to qux or corge because there are blank lines separating it from
            // // both.
            // 
            // // Detached comment for corge paragraph 2.
            // 
            // optional string corge &#x3D; 5;
            // /* Block comment attached
            // * to corge.  Leading asterisks
            // * will be removed. */
            // /* Block comment attached to
            // * grault. */
            // optional int32 grault &#x3D; 6;
            // 
            // // ignored detached comments.
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }
        }
        // Describes the relationship between generated code and its original source
        // file. A GeneratedCodeInfo message is associated with only one generated
        // source file, but may contain references to different source .proto files.
        export interface GeneratedCodeInfo {
            // An Annotation connects some span of text in generated code to an element
        // of its generating .proto file.
            annotation?: GeneratedCodeInfo.Annotation[];
        }
        export namespace GeneratedCodeInfo {
            // Describes the relationship between generated code and its original source
        // file. A GeneratedCodeInfo message is associated with only one generated
        // source file, but may contain references to different source .proto files.
            export interface Annotation {
                // Identifies the element in the original source .proto file. This field
            // is formatted the same as SourceCodeInfo.Location.path.
                path?: number[];
                // Identifies the filesystem path to the original source .proto.
                sourceFile?: string;
                // Identifies the starting offset in bytes in the generated code
            // that relates to the identified object.
                begin?: number;
                // Identifies the ending offset in bytes in the generated code that
            // relates to the identified offset. The end offset should be one past
            // the last relevant byte (so the length of the text &#x3D; end - begin).
                end?: number;
            }
        }
    }
}

