import askForName from './askForName';
import custom from './custom';
import data from './data';
import { packageIndex } from './package';
import { testFile } from './test/index';
import { src } from './library/index';

/**
 *
 * 开始根据数据创建包  */
export async function createNpm(): Promise<void> {
  /**
   *
   *  检测是否遗漏了询问包名
   *
   * 倘若并没有配置 name 属性值，则
   * */
  if (data.name == '') {
    await askForName();
    await custom();
    await createNpm();
    return;
  }

  packageIndex();

  src();

  testFile();
}
