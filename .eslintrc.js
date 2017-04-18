module.exports = {
    root          : true,
    parser        : 'babel-eslint',
    parserOptions : {
        sourceType : 'module'
    },
    env           : {
        browser : true,
        node    : true
    },
    extends       : 'eslint:recommended',
    plugins       : [
        'html'
    ],
    rules         : {
        'global-require'              : 0,
        'import/no-unresolved'        : 0,
        'no-param-reassign'           : 0,
        'no-shadow'                   : 0,
        'indent'                      : [ 2, 4 ],
        'quotes'                      : [ 1, 'single' ],
        'linebreak-style'             : [ 2, 'unix' ],
        'semi'                        : [ 2, 'always' ],
        'strict'                      : [ 2, 'global' ],
        'no-else-return'              : [ 2 ],
        'curly'                       : [ 2 ],
        'no-eval'                     : [ 2 ],
        'camelcase'                   : [ 2 ],
        'comma-spacing'               : [ 2, { 'before' : false, 'after' : true } ],
        'computed-property-spacing'   : [ 2, 'never' ],
        'eol-last'                    : [ 2 ],
        'func-names'                  : [ 1 ],
        'func-style'                  : [ 2, 'expression' ],
        'key-spacing'                 : [
            2, {
                'beforeColon' : true,
                'afterColon'  : true,
                'align'       : 'colon',
                'mode'        : 'minimum'
            }
        ],
        'max-depth'                   : [ 2, 3 ],
        'max-nested-callbacks'        : [ 2, 4 ],
        'max-params'                  : [ 2, 4 ],
        'new-cap'                     : [ 2 ],
        'new-parens'                  : [ 2 ],
        'no-array-constructor'        : [ 2 ],
        'no-confusing-arrow'          : [ 2 ],
        'no-new-object'               : [ 2 ],
        'no-spaced-func'              : [ 2 ],
        'object-curly-spacing'        : [
            2, 'always', {
                'objectsInObjects' : true,
                'arraysInObjects'  : true
            }
        ],
        'padded-blocks'               : [ 2, 'never' ],
        'require-jsdoc'               : [
            2, {
                'require' : {
                    'FunctionDeclaration' : true,
                    'MethodDefinition'    : false,
                    'ClassDeclaration'    : false
                }
            }
        ],
        'space-before-function-paren' : [
            2, {
                'anonymous' : 'always',
                'named'     : 'never'
            }
        ],
        'keyword-spacing'             : [ 2 ],
        'no-lonely-if'                : [ 2 ],
        'space-in-parens'             : [ 2, 'never' ],
        'space-before-blocks'         : [ 2 ],
        // allow debugger during development
        'no-debugger'                 : process.env.NODE_ENV === 'production' ? 2 : 0
    }
};
