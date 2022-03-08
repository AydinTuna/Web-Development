sayiBolenler = []

def SayiBolenBul(sayi,dizi):
    for bolen in range(0,sayi-1):
        bolen += 1
    
        if(sayi % bolen == 0):
            dizi.append(bolen)
        else:
            continue
    temp = 0
    for x in dizi:
        temp += x

    print("%d sayısının kendisi hariç bölenleri toplamı: %d" % (sayi,temp))
    MukemmelMi(sayi,temp)

def MukemmelMi(sayi,temp):
    if (sayi == temp):
        print("%d sayısı mükemmel sayıdır" % sayi)
    else:
        print("Girilen sayı mükemmel değildir")

sayi = int(input("Sayı Giriniz: "))

print("\n")
SayiBolenBul(sayi,sayiBolenler)