#!/usr/bin/env ruby
require 'fileutils'

def substitute_special_letters(basename,
                               special_letters)
  substitute_name = basename
  special_letters.each_key do |special_letter|
    substitute_name = substitute_name.gsub(special_letter,
                                           special_letters)
  end
  return substitute_name
end


BASEDIR = '/app/downloads'
special_letters = { "/" => "\u2044"}

STDIN.each do |line|
  cid, basename = line.chomp.split("\t")
  org = File.join(BASEDIR, "#{cid}.zip")
  basename = substitute_special_letters(basename,
                                       special_letters)
  FileUtils.mv(org, File.join(BASEDIR, "#{basename}.zip")) if File.file?(org)
end
