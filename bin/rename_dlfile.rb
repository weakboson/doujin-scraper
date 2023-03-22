#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'

SPECIAL_LETTERS_MAP = {
  '/' => "\u2044",
  ':' => '：' # 例えばコロンも対応するとしたら
}.freeze
def substitute_special_letters(original)
  sub_name = original.dup
  SPECIAL_LETTERS_MAP.each do |k, v|
    sub_name.gsub!(k, v)
  end
  sub_name
end

BASEDIR = '/app/downloads'

$stdin.each do |line|
  cid, basename = line.chomp.split("\t")
  org = File.join(BASEDIR, "#{cid}.zip")
  FileUtils.mv(org, File.join(BASEDIR, "#{substitute_special_letters(basename)}.zip")) if File.file?(org)
end
