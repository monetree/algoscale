from django.shortcuts import render
import csv
from django.http import HttpResponse, JsonResponse



def general_number(request):
    csvfilename = 'algo/generalnumber.csv'
    csvfile = open(csvfilename, 'r')
    reader = csv.DictReader(csvfile)
    fieldnames = ("Ticker","Company","Industry","PreviousClose","Open","Bid","Ask","DaysRange","ftWeekRange","Volume","AvgVolume","MarketCap","Beta","PERatioTTM","EPSTTM","EarningsDate","ForwardDividendYield","ExDividendDate","OneyTargetEst","ticker_company")
    output = []

    for each in reader:
        row = {}
        for field in fieldnames:
            row[field] = each[field]
        output.append(row)
    return JsonResponse(output[20:30],safe=False)

def lossgain_graph(request):
    csvfilename = 'algo/lossgaingraph.csv'
    csvfile = open(csvfilename, 'r')
    reader = csv.DictReader(csvfile)
    fieldnames = ("Ticker","company","minusfiftyper","minustwentyfiveper","minusfifteenper","minustenper","minuseightper","minussixper","minusfourper","minustwoper","twoper","fourper","sixper","eightper","tenper","fifteenper","twentyfiveper","fiftyper","ticker_company")
    output = []

    for each in reader:
        row = {}
        for field in fieldnames:
            row[field] = each[field]
        output.append(row)
    return JsonResponse(output[20:30],safe=False)
