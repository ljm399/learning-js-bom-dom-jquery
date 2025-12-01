# 一.Git

## 2.1. 版本控制(version control)

- 什么是版本控制

  - 一种软件工程技巧,使能在软件开放的过程中,不同人员所编译的统一程序文件得到同步

  - 简单来说,使程序员能进行代码的追踪,维护,控制等操作

    

- 版本控制的历史

  - 先CVS
  - 后SVN
  - 现在Git(Linus的作品)

- 集中式版本控制和分布式版本控制的区别

  - 集中式(CVS,SVN)
    - 所有代码都集中在单一的集中管理的服务器中
    - 当该服务器出现问题,则效率变低

  - 分布式(Git)
    - 服务器有代码仓库,自己本地也有,其他人电脑引入则也会有
    - 现在公司都是Git来管理




## 2.2 Git的安装

- 安装Git
- Git安装的几个工具
- - Git bash
    - 基于cmd,同时扩展了很多命令和功能
  - git cmd
    - 给习惯了window系统的cmd命令人准备
  - git gui
    - 给那些喜欢ui界面的人用到,但本质还是git bash





## 2.3. Git的配置

- git config-global user.name ""
- git config-global user.email ""





## 2.4.初始化仓库

- 本地 git init
- 远程git clone
  - 本地仓库从远程仓库克隆下来 -- 默认拿到远程仓库的main分支
  - 不要加名字 直接 git clone +地址




### 熟悉一个项目最好的方式就是

- 调几个小bug

- 公司会先给你几个小bug或功能,让你完成,从而熟悉bug

  



## 2.5. 本地文件的状态

![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\git流程图.png)

<img src="D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\流程图2.png" alt="流程图2" style="zoom:150%;" />

- 未跟踪(没有git add . 或项目中某个文件) ---- 加入仓库中

- 已跟踪(没有git commit -m "")
  - 暂停区中的文件状态
    - 可git commit -m "" 到未修改的稳健状态(无-a)
    
      - 因为信息不能用中文
    
      - 解决方法一：直接用英文
    
      - 方法二：
    
        - git commit 会进入vim编译模式
    
        - 同时你会看到Git 会自动填充一些内容
    
          - 不用管，
    
          - **以 `#` 开头的行**：
    
            - 这些是**注释**，提交时会被自动忽略
            - 只是给你看当前状态的提示信息
    
          - ```javascript
            第一行是Merge branch 'orginhttp/main' into main
            ```
    
            - 这是 Git **自动生成的默认合并提交信息**
            - 你可以保留或修改它
            - 建议修改，要是里面信息满足你要求，可以直接提交 ----》 :wq
            - 要是你修改了
              - 先esc
              - :wq!
                - !作用：强制保存并退出
    
  - 已修改文件状态
    - 可git commit -a -m "" 到 未修改的稳健状态
    - 注意: 为跟踪即(没有加入仓库中)是不可以使用 git commit -a -m ""
    
  - 未修改稳健状态(最终状态)
  
- 查看文档状态
  - git status
  
    - 查看是未跟踪(Untracked)
    - 还是已跟踪但未commit
    - 最后nothing to commit 
  
    -  显示更简短信息(了解)
      - git status -s
      - git status --short
        - 如只有 M index.js  -- M表示修改状态



## 2.6. 常见的操作

- git init(无论什么快捷键先初始化,本地才能有仓库,要是git clone则不用)

- git add.
  - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\未跟踪.png)

- git commit -m""
  - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\已跟踪.png)

- git commit -a -m ""(上面两者的简写)
  - 执行这行命令则U和A都没有


## 2.7. 历史记录

- git log
- git log --pretty=oneline
- git log --pretty=oneline --graph
  - 图像化 -- 更好地显示多分支




#### 按Q表示退出



## 2.8. 版本回退

- git reset --hard HEAD^
  - 回到上个版本 
  - ^^ 上上个版本

- git reset --hard HEAD~100
  - 回到上100个版本

- git reset --hard id
  - 先通过git log --pretty=online查看所有版本
  - 然后每个版本有其id,那前8位当id就行




- 当你回到之前版本
  - git log 看不到前面的版本
  - solve : git reflog
    - 查看所有版本,包括最新的版本



## 2.9. 远程仓库

- GitHub
- Gitee
- gitlab: 自己搭建
  - 自己在服务器中下载gitlab这个软件,则服务器就有git管理的功能
  - 公司主要用这个
  - 操作和gitee和GitHub一样






## 2.10. 身份认知

- 方法一:Https的账号密码凭证
  - Mac的GIt有个"osxkeychain"模式,他会把凭证缓存在系统用户的钥匙串中(加密的)
    - 访问远程仓库时就会自动携带给凭证

  - window系统达到上面效果,下载git,它本身就下载了个"Git Credential Manager for Windows"的辅助工具
    - 查看是否安装: git config credential.helper
    - 若结果是 manager-core 则有
    - <img src="D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\凭证位置.png" style="zoom:200%;" />




- 方法二:ssh的公钥和私钥--Secure shell(安全外壳协议)

  - ssh-keygen -t ed25519 -c 

    - ed25519是一种格式

  - 方式二ssh-keygen -t rsa -b 2048 -c 
  
  
  
  - 执行后,其会把公钥放在待访问的电脑里面,而私钥需要用户自行管理
  
    - 公钥在执行上面命令会有记录公钥的路径
    - 将公钥拿出放到远程仓库中,就可以实现无密码登录
    - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\公钥.png)
    - 只要生成一个公钥就行,则无论是github还是gitee都可以共用一个公钥
      - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\ssh公钥.png)

​				



## 2.11.  远程的服务器

- 查看远程服务器

  - git remote
    - origin

  - git remote -v (verbose冗长)

    - ```
      origin 地址 (fetch)
      origin 地址 (push)
      ```

- 添加远程地址(让本地仓库和远程服务器建立连接)

  - git  remote add 给远程仓库起名默认是origin url
  - git fetch origin main -----拿到远程仓库的main分支
    - 有两个概念: 仓库 和分支
    - 你要是没指定那个分支,则默认是远程仓库的main(看下图)
      - 少部分仓库时master ,但因为其他主人,反对种族歧视
  - 然后让本地仓库和远程仓库建立联系
    - git merge 
      - fetch拿到的仓库(里面包括远程仓库的所有分支)
      - 但你这融合必须要说明是那个分支(set-upstream-to=xx)

- 上传
  - git push
    - 要是本地和远程仓库的分支不同
    - 可能未git config push.default upstream(upstream自动去找)
      - 其默认是simple,即本地和远程仓库名字相同才推送,否则报错
  - 建议当地分支和远程仓库的分支相同,则少很多麻烦
    - git branch -c main -------- 意思在本地建立并切换为main分支
    - 则本地有main(和远程仓库的分支名相同) 和 master ----master可以删也可以不删



- 和本地仓库

  - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\远程仓库和本地仓库的区别.png)

  - 指点远程仓库的那一个分支,最后名字相同



- 查看本地分支跟踪上游哪个分支
  - git branch -vv  (有两个v)





## 2.12. 忽略文件

- 文件名:  .gitignore
  - 作用:往里面添加的文件,则不会被git管理
- cli自己会创建
- 或自己去gitHub中下载各语言(如java)中以及配置好的.gitignore





### 2.13. git fetch作用

从远程仓库获取最新的提交、更改、分支、标签，但不会自动合并到本地工作区。

- 它 **只下载**

- 不修改你的代码

- 不合并

- 不覆盖本地

- 不更新你的当前分支
- git pull ->(git fetch + git merge)



# 二,问题的处理

## 2.1. 设置上游分支

```
git fetch
git branch --set-upstream-to=origin/main
```

- orign/main解释

  - `origin/main` = **远程仓库（origin）中的 main 分支**

    拆开来看：

    - **origin**：你的远程仓库名字（默认 Git 叫它 origin）
    - **main**：远程仓库上的分支名（remote branch）

git branch  --vv 可以查看上游分支是什么

- 修改你本地设置的远程仓库的名字（原本是origin）
  - git remote rename origin originhttp
    - originhttp是新名字



## 2.2 合并没有共同base分支

```
git merge --allow-unrelated-histories
```



## 然后下次提交才能使用快捷键

- git pull



## 2.3 当你的终端进入vim或其他编译器如下

- 出现一般是你git merge --allow-unrelated-histories

![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\vim.png)

- 来源
  - 这是 Git 在要求您输入一个合并提交消息。当您合并分支时，Git 通常会要求您提供一个消息来描述这次合并的原因，特别是当您将一个更新的上游分支合并到一个主题分支时。这是为了帮助未来的您或其他开发者理解这次合并的背景和目的。
- 退出
  - 先ESC,在输入:wq



###  但你合并的是本地的两个分支

- 因为有共同祖先(共同base)
- 则直接 git merge







## 2.4 网络问题无法git push

- 原因

  - #### 1. 被网络防火墙或运营商拦截

    有些网络环境（尤其是校园网/公司网/部分宽带）对 GitHub 的 443 端口做了干扰或重置。

  ####    2. 你用了代理软件（比如 V2RayN）但 Git 没配置代理

  ​          你系统里开了 V2Ray、Clash 之类的工具，浏览器能访问 GitHub，但命令行工具（比如 `curl` 和     `git`）**默认不走代理**，所以访问失败。



- 解决方法一（推荐）
  
  - git config --global -l（先查看通过那个端口）
    - git config --global http.proxy http://127.0.0.1:10809
      git config --global https.proxy http://127.0.0.1:10809
  
  
  - 发现不是v2ray的20009
    - 解决
      - 先删除之前的
        - git config --global --unset http.proxy
          git config --global --unset https.proxy
      - 设置为现在的
        - git config --global http.proxy socks5://127.0.0.1:20009
          git config --global https.proxy socks5://127.0.0.1:20009
  
- 解决办法二
  - 使用ssh不用https/http



- crul工具

  - crul GitHub网址------ 比如这里ping可以成功,但crul失败了,说明命令行工具没走代理

    - crul比ping强大,如同终端的打开网页
    - 模拟浏览器访问网站（例如测试你的网站有没有返回内容）

    - 连接 API 接口拿数据（比如 RESTful API）

    - 下载文件

    - 带请求头、参数、cookie 等测试接口

    - 设置代理测试翻墙



## 2.4.2 网络问题无法npm下载

- solve:因为默认不走代理,所以让其走代理
  - npm config set proxy http://127.0.0.1:10809
    npm config set https-proxy http://127.0.0.1:10809

- 看有无配置
  - npm config get proxy
    npm config get https-proxy
  



## 2.5. 本地分支和远程分支名字不同

```javascript
git branch --set-upstream-to=origin/main 
git fetch
git merge --allow ..... (fetch+merge 为了和远程仓库连接同时拿到最新代码以防同事更新了)
git config push.default upstream 
git push
下一次直接git push

简写
git fetch
git merge --allow .....
git push -u origin master:main 就可以了
-u 是--set-upstream-to=origin/main 的缩写
下次直接git push
```

- 或

  - ```javascript
    git fetch
    git merge --allow ..... 
    git push origin HEAD:main
    #HEAD表示指向的本地那个分支 也可以master(当前分支):main
    
    下次还有git push origin HEAD:main
    ```

- git config push.default upstream 解释

  - `push.default` 有 6 种模式：simple、matching、current、upstream、nothing、nothing 等等

  - ###### upstream 模式的规则：

    > **当你执行 `git push` 时，把当前分支推送到它的 upstream（上游）分支。**

## 相同时

当不是克隆,而是要git init

```javascript
#把本地分支 master 重命名为 main
git branch -m master main  ------- 把本地分支 master 重命名为 main
#或者 
git checkout -b main --track origin/main 
# 在本地创建main分支并且指向远程的main 
缩写
git checkout main

#要是远程仓库没有main,则在那里创建
git push origin main
```

- git commit -m
  - -m ： message
- git branch -m master main\
  - -m: move



# 三. 仓库的使用

### 网络问题

- git config --global -l
  - 看其结构是不是翻墙那个接口
- 不是则先删除再修改
  - 删除
    - git config --global --unset http.proxy
      git config --global --unset https.proxy
  - 修改
    - git config --global http.proxy http://127.0.0.1:20009
      git config --global https.proxy http://127.0.0.1:20009

## 3.1 GitHub的使用

### 3.1.1. GitHub的作用



### 3.1.2. GitHub的查找和下载开源项目



### 3.1.3. GitHub中操作--https

- 由0开发项目

```
# 1.初始化本地仓库
git init

# 2.添加远程仓库
git remote add origin xx


# 3.从远程仓库获取内容
git fetch
git branch --set-upstream-to=origin/main
git merge --allow-unrelated-histories

# git push
git config push.default upstream

# 3的另一种做法(快捷做法) ----- 本地仓库的分支和远程仓库分支名字相同的优势
git checkout -b main(生成main分支同时切换到main)
等于
git branch -b main(生成) + git checkout main(切换)
```

- 查看本地保存的远程服务器地址
  git remote -v
  orginhttp       https://github.com/ljm399/vue3-app.git (fetch)
  orginhttp       https://github.com/ljm399/vue3-app.git (push)
  origin  git@github.com:ljm399/vue3-app.git (fetch)
  origin  git@github.com:ljm399/vue3-app.git (push)
  - orginhttp和origin 自定义
    - gt remote add origin xx  ---origin可自定义
  - 你的仓库同时存在两个远程：`origin`（SSH） 和 `originhttp`（HTTPS）
    - 尤其是 `origin` 是 SSH 地址，但 SSH 没配置，所以 fetch/push 失败。
    - 解决：git remote remove origin 就只剩orginhttp



- 已有项目,直接clone (这里不用git init) ---- git init是为了创建本地仓库

  ````
  git clone origin xxx
  
  cd main(注意下载下来仓库,要进入先)
  
  
  开发项目
  git commit -a -m ""
  git push
  ````

  



### 3.2 Gitee的使用--SSN

#### gitlab和gitee,GitHub操作一样

- 先把公钥放到gitee仓库中



### 3.3. 开源协议

![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\开源协议.png)





# 四.git tag

```javascript
git tag v1.0.0


git tag

# 切换到之前分支
git checkout v1.0.0

# 回到最新版本
git checkout master

# 删除本地分支
git tag -d v1.0.0

# 查看远程tag
git ls-remote --tags originhttp（originhttp可以自己定义）

#将本地tag push远程仓库
#注意本地也必须有分支,同时push的分支和本地分支一个版本如v1.0.0,否则是失败
git push origin v1.0.0
git push origin --tags

# 删除远程的tag
git push origin -d v1.0.0

# 查看本地所有分支
git tag -l

# 显示某个tag的具体信息
git show v1.0.0

# 一次推送多个tag到远程分支 -- 前提:本地有多个对应分支
git push origin --tags
```

- 回到某个标签,不要直接输入新内容
  - 而是建立个新分支,在输入



# 五.git的原理(git如何保持内容)

- ```
  git init ---- 创建本地仓库
  git add .
  # .git/objects/00 40
  
  # 9b是文件名,63是具体文件名的前两个数
  $ git cat-file -p 9b6e
  console.log("a")
  
  $ git cat-file -t 9b6e
  blob
  ```

  - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\principle2.png)
  - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\principle1.png)



- ```
  git commit -m "aaa"
  # .git/objects/eb -> 提交信息/作者/tree
  # .git/objects/aa
  # aaa.js -> 00
  # bbb.js ->40
  ```

  ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\principle3.png)

  - d2是文件名 63是具体文件的前2个数

  ```
  git cat-file -p d263
  100644 blob 9b6e87ace7ff7830aed96dab36902282477aaff6    a.js
  100644 blob 090a276764af0deffb4afcd9c914d0e5faa56375    b.j		
  ```

  

  - 提交对象里面的 tree 指向d263这个对象

    ```
    git cat-file -p b6fb
    tree d263197324e57869e2ba7108b131a1fe0cca09ff 
    author mjlcode <15247935+mjlcode@user.noreply.gitee.com> 1744769422 +0800
    committer mjlcode <15247935+mjlcode@user.noreply.gitee.com> 1744769422 +0800
    
    初始化
    ```

  
  - 多个提交对象包含tree,author等等,且靠parents属性连接
  
    - <img src="D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\git提交原理.png" style="zoom:200%;" />
  
    - 校验和
  
      ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\git原理-校验和.png)
  
  
  
  
  
  - master里面有数据,记录最后一个提交对象
    - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\master指针.png)
  - git通过HEAD这个特殊的指针知道在那个分支上
    - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\HEAD指针.png)
    - 

​	



# 六. 分支结构

## 6.1. 本地分支的使用

- 创建分支

  ```
  git branch testing  ---------》创建一个名为 testing 的本地分支，但不切换过去。
  git checkout testing -------->切换分支
  
  #合并
  #方法一
  git checkout -b testing  解释：(-b branch)
  #方法二
  # 功能方法一一样
  git switch -c testing
  
  ```

- 注意
  - 要是你仓库什么都没有,则git branch 就什么都没有
    - 即使git branch master来创建分支也不行
  - solve: git add .(先跟踪)

- 多分支目的
  - 为了修复之前发布的版本的bug
  - 一般用hotfix来命令那个分支 ---- 热修复



- 合并分支

  - ```
    # 切回到主分支
    git checkout master
    
    # 不需要allow related histories,因为他们有共同的base(共同祖先)
    git merge testing
    git add .
    git commit -m ""
    ```
    
    
    
    - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\merge.png)
    - 选择采用传入的更改,而不是他帮你做的更改如

  

  

  ```
  # 查看所有的分支
  git branch
  
  #删除本地分支
  git branch -d testing
  只是把指针删除了,数据还在
  ```

  ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\gitlog.png)



## 6.2. 远程分支的操作

```
# 初始化本地仓库
git init

# 查看远程分支
git branch -r

# 添加远程仓库
git remote add origin xxx

#从远程仓库获取内容
git fetch
git branch --set-upstream-to=origin/main
git merge --allow-unrelated-histories

# git push
git config push.default.unstream

# 更多上面的简写在2.5中
```



- 注意开发主要在develop这个分支里面,master只记录主要版本



删除远程分支

```
git push origin -d develop
```



- 远程的多分支操作
  - 你只提交master到远程仓库,没有提交dev这个分支
    - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\多分支.png)
  - 然后另一个从远程仓库,拿到这个分子,只有master没有dev
    - 如同把dev删除,反正分支这个名字只是个指针
    - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\多分支2.png)



## 6.3. 公司开发项目



- 方式一
  - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\工作流一.png)
  - master:记录主要的版本
  - develop:开放版本
  - topic:新主题




- 第二图
  - master:记录主要的版本
    - tag
  - hotfix:热修复
    - merge master
    - merge develop
  - develop:开发分支
  - release:上线的分支
    - merge master
    - merge develop
  - feature:新特性



## 6.4. git rebase

- 有rebase 和 merge 两种

merge

- ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\rebase.png)



rebase

​	![rebase2](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\rebase2.png)







- 改变某一个分支base,目的让git log --pretty=oneline --graph的历史记录更加的简洁
- 黄金原则:不要在主分支中使用rebase
- 操作

  - ```
    # 先切换到主分支
    git checkout master
    
    git rebase 其他分支
    
    git commit -a -m ""
    #要是没跟踪则add和commit 要分开
    
    
    #确定完成
    # 执行完这步则((master|REBASE 1/2)) 变为 (master) -- 表示完成了rebase
    git rebase --continue
    
    #取消
    #也可以结束rebase,即返回之前的merge模式
    #((master|REBASE 1/2)) 也变为 (master)
    git rebase --abort
    
    
    
    
    ```
  - 主分支不要修改

    - ![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\主流程.png)



# 七. Git中常见的命令总结

![](D:\Desktop\JavaScript\06_node-Esmodule-webpack-git\05_git\各种方案.png)

```
git clone xxxx

git add .
git commit -m "xxx"

git pull ->(git fetch + git merge)
# 一定要记得先从远程仓库拿到最新
#否则要是本地不比远程仓库那个更新,则push不了

git push
```



进阶命令:

- main
- develop
- feature

```
git checkout develop
# 1.查看服务器是否有origin/develop这个分支
# 2.创建一个本地的develop分支
# 3.让本地的develop分支自动跟踪origin/develop
# 4.切换到develop分支

git add .
git commit -m ""
git pull
git push
```



高级的命令:

```
git tag

git checkout -b develop
git push origin develop

git merge develop
git rebase
```





### 当远程仓库是空的

- git init
- git remote add origin  http/ssh
- git add .
- git commit -m ''
- git push -u origin master
  - 这里的master是本地的分支，远程仓库因为是空的，所以也会创建master
  - -u 上面有讲



### 当想删除之前上传github的内容，不仅是覆盖，而且删除github所有文件，然后上传新的文件

- 不要执行 rm -rf *  会把本地文件都给删了，但本地git仓库还在
- rm -rf .git  --- 删除本地仓库





# 八。github或gitee readme.md图片引入

### 方法一：

1. 在项目根目录创建一个专门存放图片的文件夹：
2. src/docs/images
3. 使用
   - ![首页](D:\Desktop\JavaScript\.docs\images\homepage.png) --->注意是相对路径
   - 或者上传后，找到上传到github的图片，然后复制路径
     - 在github上修改readme.md的![首页](D:\Desktop\JavaScript\粘贴路径)

### 方法二：使用在线图床（建议不要使用，因为加载要时间，上面直接引入效率高）

1. 上传图片到图床（如 imgur, sm.ms）

2. 获取图片 URL

3. 使用绝对路径：

   ![首页](https:)





# 问题：密钥那些上传会警告且报错，阻止上传

解决:要把本地之前设置好的仓库全清空，才能继续上传

```javascript
# Step 1: 完全清除本地 Git
rm -rf .git

# Step 2: 重新初始化
git init
git add .
git commit -m "feat: 卡证识别小程序"

# Step 3: 强制推送
git remote add origin https://github.com/ljm399/cardIdentification-miniprogram.git
git push -f origin master

# Step 4: 重新打标签
git tag v1.0.0
git push origin v1.0.0
```

### 额外知识补充：忽略文件

- project.private.config.json 是个人配置，每个开发者都会有自己的版本，所以必须被 .gitignore 排除，避免冲突和隐私泄露





# 问题2：git仓库目录下有一个 **`.git`** 文件夹，形成了嵌套的 Git 仓库 导致无法git add .





