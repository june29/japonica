Bundler.require

today = Date.today

# 月曜日だけ動かす
exit unless today.wday == 1

repository = 'june29/japonica'
client = Octokit::Client.new(access_token: ENV['GITHUB_ACCESS_TOKEN'])

issue_title = "#{today} 〜 #{today + 6} の学び"
issue_description = "この Issue はスクリプトによって自動で作成されました。今週も学びを記録していきましょう！"

search_result = client.search_issues("repo:#{repository} in:'#{issue_title}'")

# すでに同名の Issue があったら処理を終える
exit if search_result.items.select { |item| item.title == issue_title }.size > 0

client.create_issue(repository, issue_title, issue_description)
