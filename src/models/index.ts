const context = (require as any).context('./', false, /\.ts$/);
// 需要多次导入的 可以使用 require.context
/**
 * 三个参数
 * directory {String} -读取文件的路径;
 * useSubdirectories {Boolean} -是否遍历文件的子目录;
 * regExp {RegExp} -匹配文件的正则
 * 具有三个属性
 * resolve{Function}接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径;
 * keys{Function}返回匹配成功模块的名字组成的数组;
 * id
 */
export default context
  .keys() // [./login.ts]
  .filter(item => item !== './index.ts')
  .map(key => context(key));
// context(key) : context作为函数使用,接收的参数和resolve一样,匹配文件的相对路径,返回一个module模块
