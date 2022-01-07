import Mock from 'mockjs';

/**
 * @function 登录接口
 * @returns 
 */
export function loginServe(data: any): Promise<{ success: boolean }> {
  return new Promise((resolve, reject) => {
    const { username, password } = data;
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        resolve({ success: true });
      } else {
        reject({
          success: false,
          errorMsg: '用户名或密码错误'
        })
      }
    }, 1000);
  })
}
