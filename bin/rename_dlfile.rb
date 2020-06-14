#!/usr/bin/env ruby
require 'fileutils'

BASEDIR = '/app/downloads'

STDIN.each do |line|
  cid, basename = line.chomp.split("\t")
  org = File.join(BASEDIR, "#{cid}.zip")
  FileUtils.mv(org, File.join(BASEDIR, "#{basename}.zip")) if File.file?(org)
end
