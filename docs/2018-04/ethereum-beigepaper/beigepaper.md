# Ethereum Beigepaper

Beigepaper: An Ethereum Technical Specification
https://github.com/chronaeon/beigepaper

## 概要

Ethereum のプロトコルは決定論的であるが、ふたつの基本的な機能を持つ実用的に無制限なステートマシンでもある。ひとつには、どこからでもアクセスできるシングルトンステートであり、もうひとつには、そのステートに変更を適用できる仮想マシンである。

## 1. コンピュータとしての Bitcoin を想像する

Ethereum は、Bitcoin に端を発する分散台帳モデルを仮想コンピュータを形成するために別の方法で活用し、マシンレベルの opcode に Bitcoin のトランザクションと同レベルの確実性を与える。Bitcoin の台帳が正確で、また Bitcoin のコンセンサス機構によってタイムスタンプも正しく記録されるのと同様に、Ethereum 上で開始された機械命令が動作することも確実である。

言い換えれば、Ethereum の Blockchain 上で実行されるプログラムは基本的に止まらない。これは Ethereum のプログラムがバグを有しないことを意味しない。Ethereum のプログラムは外部の非ネットワーク的な力の影響を受けることなく実行されることが保証される、という意味だ。この特性は暗号法的証明の上に構築された Blockchain 固有のセキュリティにもたらされる。
