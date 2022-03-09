bolenlerBirinci = []
bolenlerIkinci = []
sonuclar = {}

def SayiBolenBul(sayi,dizi):
    for bolen in range(0,sayi - 1):
        bolen += 1
    
        if(sayi % bolen == 0):
            dizi.append(bolen)
        else:
            continue
    temp = 0
    for x in dizi:
        temp += x

    sonuclar[sayi] = temp    

    print("%d sayısının bölenleri toplamı: %d" % (sayi,temp))

def ArkadasMi():
    
    if ((list(sonuclar.keys())[0] == list(sonuclar.values())[1]) 
        and (list(sonuclar.keys())[1] == list(sonuclar.values())[0])):
        return True
    else:
        return False

birinci = int(input("Birinci Sayı: "))
ikinci = int(input("İkinci Sayı: "))

print("\n")

SayiBolenBul(birinci,bolenlerBirinci)
SayiBolenBul(ikinci,bolenlerIkinci)

sonuc = ArkadasMi()
print(sonuc)
