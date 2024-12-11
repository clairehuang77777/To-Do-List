# To-Do-List
This project is built with react + vite

### Feature
## To Do Page
- **Create new task** By typing in the input and press 'Enter', user can add a new task.<br>
![createnewtask](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTNjZHEzaXlzaGNjMTQzeGNjcGhnd3phaDg4c2x5MXh2bG1ocTE3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jOOrkwOOoh8gU6SBFQ/giphy.gif)

- **Finish the task** By click the toggle down button to underline the finished task.<br> 
![toggleDown](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTZ2a24xeWt0MGE4bzN5ZHJ2cjZmZGxnMGMzdmR3YnRhaTJwMXZlYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TDYIZb6DUHPWMH52Iu/giphy.gif)

- **Enter/ Exit Edit mode** By double Click to enter 'Edit Mode', click 'Enter' to Save the edited task, click 'ESC' to exit the edit mode.<br>
![EditMode](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmhpb3k0eWNweThpbW5tdGFkdzNmbzR4aG43andxZHdtcGF1dG9pMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MejNs3fb3raNycwRMw/giphy.gif)

- **Double Click to enter 'Edit Mode'**, click 'Enter' to Save the item, click 'ESC' to exit the edit mode.<br>
![EditMode](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmhpb3k0eWNweThpbW5tdGFkdzNmbzR4aG43andxZHdtcGF1dG9pMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MejNs3fb3raNycwRMw/giphy.gif)

- **Delete the task** and show total Task count in footer.<br>
![DeleteMode](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2h4aGNleXNmemJpYTh5ajJpMXpqbWo5b2d1NHcwYXRlcW9wbDV6aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mU622AzxINmjZ6tdVp/giphy.gif)

## Login Page & Register Page: Authorization feature
- **Log In** With validate account & password(Validate by Login API), user can login and see to do page.
- **Register** If there's no duplicate account/email(Validate by signup API), user can register a new account.<br>
![Authorization](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmI4eDAwcGR6eWw1d3FiZDN5YmwzbnByZXI5dWYzOWg0Y3JoeDd5aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9SBnkTI5ZDWhrGNNJ0/giphy.gif)



## Project Structure
- README.md  //介紹專案目錄

#### 資源管理
- package-lock.json // 所有資源包的版本紀錄
- package.json // 紀錄指令跟資源依賴

#### 靜態目錄文件
- public
  - favicon.ico
  - index.html //入口文件
  - manifest.json 
  - robots.txt

#### 本機server資料源
- db.json  //儲存在本機server上的資料

#### 主要目錄 & 樣式文件
- src
  - index.js //引入App.jsx
  - index.css //index.js樣式文件
  - App.jsx // 管理Router, page components
  - App.scss //app.jsx樣式文件
  - pages //各頁面components
    -  HomePage.jsx //首頁
    - LoginPage.jsx //登入頁
    - SignUpPage.jsx //註冊頁
    - TodoContext.js
    - TodoPage.jsx //ToDoList頁
    - index.js //集中管理import&export
  - components
    - Header.jsx //構成TodoPage的元件
    - TodoCollection.jsx //構成TodoPage的元件
    -  TodoInput.jsx //構成TodoPage的元件
    - TodoItem.jsx //構成TodoPage的元件
    - Footer.jsx //構成TodoPage的元件
    - AuthInput.jsx //構成LoginPage, SignUpPage的元件
    - common //構成LoginPage, SignUpPage的元件樣式
    - auth.styled.js
      - index.js //集中管理import&export
    -  logo.svg
  - api
    - auth.js // 打endpoint "api auth"
    - todo.js //打endpoint "localhost:3004"
  - contexts //重構:封包打api動作, 統一管理"已認證"/“未認證”狀態, 監聽頁面跳轉
    - AuthContext.jsx
  - assets
    - images
      - ac-logo.svg
      - check-active.svg
      - check-circle.svg
      - check-hover.svg
      - index.js
  - reportWebVital.js
  - setupTests.js
