import requests

def fetch_proxies():
    proxy_list = []

    # Fetch proxies from Proxyscrape API
    url1 = 'https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all'
    response1 = requests.get(url1)
    proxy_list.extend(response1.text.strip().split('\n'))

    # Fetch proxies from ProxyList API
    url2 = 'https://www.proxy-list.download/api/v1/get?type=http'
    response2 = requests.get(url2)
    proxy_list.extend(response2.text.strip().split('\n'))

    # Fetch proxies from ProxyList API
    url3 = 'https://www.proxy-list.download/api/v1/get?type=socks4'
    response3 = requests.get(url3)
    proxy_list.extend(response3.text.strip().split('\n'))

    # Fetch proxies from ProxyList API
    url4 = 'https://www.proxy-list.download/api/v1/get?type=socks5'
    response4 = requests.get(url4)
    proxy_list.extend(response4.text.strip().split('\n'))

    return proxy_list

def export_proxy_list(proxy_list):
    with open('proxy12.txt', 'w') as file:
        for proxy in proxy_list:
            file.write(proxy + '\n')

proxy_list = fetch_proxies()
export_proxy_list(proxy_list)
