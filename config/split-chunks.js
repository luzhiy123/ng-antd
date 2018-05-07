/**
 * js为ng组jsx为react组，两组内分别有大量公用代码
 * 所以将依赖包按照ng和react区分
 * 算法思路
 *  ng中ngGroup中有两个以上而react中不包含则打包入ng-vendor，
 *  react同理
 *  以上两者均不符合情况下，设置minChunks为3打包入commons
 */

const 
    _ = require('lodash'),
    ngReg = /.js$/,
    reactReg = /.jsx$/;
function _getNamesForCondition(module, chunks) {
    return chunks
        .map(c => c.name)
        .concat(module.nameForCondition ? [module.nameForCondition()] : [])
        .filter(Boolean);
}
function splitChunks(webpackConfig) {
    webpackConfig.optimization = webpackConfig.optimization || {};
    webpackConfig.optimization.splitChunks = webpackConfig.optimization.splitChunks || {};
    webpackConfig.optimization.splitChunks.cacheGroups = webpackConfig.optimization.splitChunks.cacheGroups || {};
    const entry = webpackConfig.entry,
        splitChunks = webpackConfig.optimization.splitChunks,
        cacheGroups = splitChunks.cacheGroups,
        ngGroup = [],
        reactGroup = [];
        
    for (let key in  entry) {
        ngReg.test(entry[key]) && ngGroup.push(key);
        reactReg.test(entry[key]) && reactGroup.push(key);
    }
    cacheGroups.commons = cacheGroups.commons || {
        minChunks: 3,
        chunks: 'initial',
        name: 'commons',
        priority: -20
    };

    cacheGroups.ngVendor = {
        test: (module, chunks) => {
            const names = _getNamesForCondition(module, chunks);
            return _.intersection(names, ngGroup).length > 1 && _.intersection(names, reactGroup).length == 0;
        },
        name: 'ng-vendor',
        chunks: 'initial',
        priority: 20
    };

    cacheGroups.reactVendor = {
        test: (module, chunks) => {
            const names = _getNamesForCondition(module, chunks);
            return _.intersection(names, reactGroup).length > 1 && _.intersection(names, ngGroup).length == 0;
        },
        name: 'react-vendor',
        chunks: 'initial',
        priority: 20
    };

}

module.exports = splitChunks;
 