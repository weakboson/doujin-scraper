#!/usr/bin/env ruby
require 'fileutils'

BASEDIR = '/app/downloads'

STDIN.each do |line|
  cid, basename = line.chomp.split("\t")
  org = File.join(BASEDIR, "#{cid}.zip")
  basename.gsub!(%r{\/}, "\u2044") #フォワードスラッシュの代わりに分数スラッシュを使用
  FileUtils.mv(org, File.join(BASEDIR, "#{basename}.zip")) if File.file?(org)
end
