exports.BaseStatement = require("./BaseStatement").BaseStatement;
exports.SimpleStatement = require("./SimpleStatement").SimpleStatement;
exports.CommentStatement = require("./CommentStatement").CommentStatement;
exports.StatementList = require("./StatementList").StatementList;
exports.MethodCall = require("./MethodCall").MethodCall;
exports.NativeCall = require("./NativeCall").NativeCall;
exports.BreakStatement = require("./BreakStatement").BreakStatement;
exports.ReturnStatement = require("./ReturnStatement").ReturnStatement;
exports.IfStatement = require("./IfStatement").IfStatement;
exports.IfElement = require("./IfStatement").IfElement;
exports.IfElementList = require("./IfStatement").IfElementList;
exports.SwitchCase = require("./SwitchCase").SwitchCase;
exports.SwitchCaseList = require("./BaseSwitchStatement").SwitchCaseList;
exports.AtomicSwitchCase = require("./AtomicSwitchCase").AtomicSwitchCase;
exports.CollectionSwitchCase = require("./CollectionSwitchCase").CollectionSwitchCase;
exports.SwitchStatement = require("./SwitchStatement").SwitchStatement;
exports.SwitchErrorStatement = require("./SwitchErrorStatement").SwitchErrorStatement;
exports.RaiseStatement = require("./RaiseStatement").RaiseStatement;
exports.FlushStatement = require("./FlushStatement").FlushStatement;
exports.StoreStatement = require("./StoreStatement").StoreStatement;
exports.ForEachStatement = require("./ForEachStatement").ForEachStatement;
exports.DoWhileStatement = require("./DoWhileStatement").DoWhileStatement;
exports.WhileStatement = require("./WhileStatement").WhileStatement;
exports.AssignVariableStatement = require("./AssignVariableStatement").AssignVariableStatement;
exports.AssignInstanceStatement = require("./AssignInstanceStatement").AssignInstanceStatement;
exports.AssignTupleStatement = require("./AssignTupleStatement").AssignTupleStatement;
exports.DeclarationStatement = require("./DeclarationStatement").DeclarationStatement;
exports.WithResourceStatement = require("./WithResourceStatement").WithResourceStatement;
exports.WithSingletonStatement = require("./WithSingletonStatement").WithSingletonStatement;
exports.WriteStatement = require("./WriteStatement").WriteStatement;
exports.UnresolvedCall = require("./UnresolvedCall").UnresolvedCall;
exports.AsynchronousCall = require("./AsynchronousCall").AsynchronousCall;
exports.FetchOneStatement = require("./FetchOneStatement").FetchOneStatement;
exports.FetchManyStatement = require("./FetchManyStatement").FetchManyStatement;

require("./MethodCall").resolve();
require("./DeclarationStatement").resolve();