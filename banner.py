import colorama
from colorama import Fore,Back,Style
colorama.init(autoreset = True)

banner = '''
         ________  __     __  ________
        |   _____| \ \   / / |   _____|
        |  |        \ \ / /  |  |
        |  |_____    \   /   |  |_____
        |   _____|    | |    |   _____|
        |  |          | |    |  |
        |  |______    | |    |  |______
        |_________|   |_|    |_________|
'''

credits = "  " + Fore.GREEN + "Created By Yogesh Jangid     " + Fore.RED + "Follow Us on Github : https://github.com/yogesh584"

print (banner)
print (credits)
