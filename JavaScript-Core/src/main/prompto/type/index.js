exports.DocumentType = require('./DocumentType').DocumentType;
exports.BlobType = require('./BlobType').BlobType;
exports.BooleanType = require('./BooleanType').BooleanType;
exports.CharacterType = require('./CharacterType').CharacterType;
exports.ImageType = require('./ImageType').ImageType;
exports.IntegerType = require('./IntegerType').IntegerType;
exports.DecimalType = require('./DecimalType').DecimalType;
exports.DateTimeType = require('./DateTimeType').DateTimeType;
exports.DateType = require('./DateType').DateType;
exports.TimeType = require('./TimeType').TimeType;
exports.PeriodType = require('./PeriodType').PeriodType;
exports.VersionType = require('./VersionType').VersionType;
exports.ListType = require('./ListType').ListType;
exports.DictionaryType = require('./DictionaryType').DictionaryType;
exports.CategoryType = require('./CategoryType').CategoryType;
exports.ResourceType = require('./ResourceType').ResourceType;
exports.TextType = require('./TextType').TextType;
exports.IteratorType = require('./IteratorType').IteratorType;
exports.CursorType = require('./CursorType').CursorType;
exports.RangeType = require('./RangeType').RangeType;
exports.MissingType = require('./MissingType').MissingType;
exports.AnyType = require('./AnyType').AnyType;
exports.CodeType = require('./CodeType').CodeType;
exports.UUIDType = require('./UUIDType').UUIDType;
exports.JsxType = require('./JsxType').JsxType;
exports.CssType = require('./CssType').CssType;
exports.HtmlType = require('./HtmlType').HtmlType;
exports.EnumeratedNativeType = require('./EnumeratedNativeType').EnumeratedNativeType;
exports.EnumeratedCategoryType = require('./EnumeratedCategoryType').EnumeratedCategoryType;

require('./BaseType').resolve();
require('./TextType').resolve();
require('./BooleanType').resolve();
require('./DecimalType').resolve();
require('./IntegerType').resolve();
require('./CharacterType').resolve();
require('./ListType').resolve();
require('./RangeType').resolve();
require('./CategoryType').resolve();
require('./DocumentType').resolve();
require('./UUIDType').resolve();
require('./DateTimeType').resolve();
require('./EnumeratedNativeType').resolve();
require('./EnumeratedCategoryType').resolve();
