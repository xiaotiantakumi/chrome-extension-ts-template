## 参考にさせていただいたリポジトリ
https://github.com/17number/chrome-extension-template-webpack-babel

## このテンプレートについて
上記参考にさせていただいたリポジトリの構成を元に、TypeScriptの開発環境を作りました。

ついでにmanifestもv3にしようとしましたが、ホットリロードで使用している
[rubenspgcavalcante/webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader)
がv3未対応だったので断念しました。

今後、webpack-extension-reloaderが更新されるか、他のライブラリを発掘した時にでも修正しようと思います。
## TypeScriptのままでデバッグする方法について
[こちらで](
https://takumi-oda.com/blog/2021/06/09/i-made-a-template-for-making-a-chrome-extension-with-typescript/)
詳細を書いています。

Chromeの開発者ツールを使ってTypeScriptのコードのままブレークポイントはったりしてデバッグできます。