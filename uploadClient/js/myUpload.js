(function () {
  // 请求主体传递给服务器的数据格式: FormData / x-www-form-urlencoded / json字符串 / 普通文本字符串 / Buffer
  let fm = new FormData();
  fm.append('file', '');
  fm.append('filename', '');
  instance.post('http://127.0.0.1:8888/upload_single', fm, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  // xxxxx&xxxxx
  instance.post('/upload_single_base64', {
    file: '',
    filename: ''
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
});