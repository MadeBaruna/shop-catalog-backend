import { prisma } from './generated/prisma-client';

async function main() {
  await prisma.createCategory({
    name: 'Mini Dress',
    order: 1,
    pictureUrl:
      'https://imager-next.freetls.fastly.net/images/resized/480/assets-category-list/wanita_dress_minidress.jpg',
    products: {
      create: [
        {
          name: 'Shahaby Plain A Line Mini Dress',
          color: 'Maroon, Dusty Pink, Mustard',
          material: 'Balotelli',
          price: 129000,
          purchaseCount: 1,
          size: 'L, S, XL',
          detail:
            '2 Saku samping, 5 Kancing depan hidup, 2 Kancing ujung lengan variasi',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/5d9ff312-9477-4a49-827a-bb9e072f6363'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/ceb77a0e-fbdc-46ce-b47d-f3ecfc36ca9b'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/d5c5a59f-6a68-47f8-9bf5-abd96ece8175'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/d01da635-24d6-4438-9d8f-a4892262426e'
              }
            ]
          }
        },
        {
          name: 'Mokzilla Stripe V-Neck Mini Dress',
          color: 'Black, Navy',
          material: 'Cotton',
          price: 139000,
          purchaseCount: 1,
          size: 'L, S, XL',
          sizeGuide:
            'Warna : Black dan Navy\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 45 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 45 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 46 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 47 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nUkuran Sorabel\nModel Menggunakan Size M',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/d30dd206-70ab-4814-aa0c-68c1711ce749'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/82f3272e-72b4-4545-b7d3-af383afdf07d'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/5c210377-4bf6-449d-b1f6-0579c50e812d'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/0fd8ca07-cf18-4b75-be22-7e708b67ff1f'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/e9a0c31e-939b-43f4-b4fa-511998053c74'
              }
            ]
          }
        },
        {
          name: 'Y&F Crislaz Salur Kerut Mini Dress',
          color: 'Blue, Khaki, Navy',
          material: 'Flannel',
          price: 159000,
          purchaseCount: 1,
          size: 'L, M, S',
          detail: 'Kancing depan, Saku depan',
          sizeGuide:
            'Warna: Black, Blue, Khaki, dan Navy\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 18 cm\nLingkar lengan 45 cm\nPanjang 95 cm\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 18 cm\nLingkar lengan 47 cm\nPanjang 95 cm\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 19 cm\nLingkar lengan 49 cm\nPanjang 97 cm\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 20 cm\nLingkar lengan 53 cm\nPanjang 100 cm\nUkuran Sorabel\nModel Menggunakan Size:  M\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/23d5a155-f3b4-4fa2-a40d-63c2d1414081'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/e4af663e-1a97-406b-bcfb-59bd0a16ddd0'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/eda51344-6394-48db-be36-b2006a2f4113'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/07fc97c9-10d3-4992-93ef-893bab3441fc'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/7c2d7191-1172-448c-99e1-928a32aac479'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/ad3dd9c0-803d-4da8-9d69-485fa9ee5824'
              }
            ]
          }
        },
        {
          name: 'Y&F Avnee Polkadot Flare Mini Dress',
          color: 'Mint, Peach, Grey',
          material: 'Crepe',
          price: 159000,
          purchaseCount: 1,
          size: 'L, M, S, XL',
          sizeGuide:
            'Warna: Peach / Grey / Mint / Black\n\nSize S\nPanjang lengan 20 cm\nLingkar lengan 35 cm\nPanjang 90 cm\nSize M\nPanjang lengan 21 cm\nLingkar lengan 37 cm\nPanjang 90 cm\nSize L\nPanjang lengan 22 cm\nLingkar lengan 39 cm\nPanjang 92 cm\nSize XL\nPanjang lengan 25 cm\nLingkar lengan 43 cm\nPanjang 95 cm\nUkuran Sorabel\nSize yang digunakan Model: M\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/89972787-eb20-4234-abfb-36b64a95144d'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/a1a26a1d-dced-4cd7-a435-a9c32ca619a5'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/955e5816-ffc9-447e-9b97-a2d206c4440b'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/6c7e8488-a137-43d2-baa8-e5719041ee15'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/4b51b2ce-c7f7-423b-923c-fefe61310d49'
              },
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/41263e6f-0010-4b33-a25c-bf98febf6044'
              }
            ]
          }
        },
        {
          name: 'Stefanyiya Brukat Bodycon Mini Dress',
          color: 'Red, Broken White, Black, Maroon, Navy',
          material: 'Scuba',
          price: 149000,
          purchaseCount: 1,
          size: 'L, M, S, XL',
          detail:
            'Bahan : Wedges Scuba kombinasi Brukat\nDetail baju : Kancing belakang, Resleting belakang\n\n',
          sizeGuide:
            'Warna : Black, Broken White, Maroon, Navy dan Red (kiri ke kanan)\n\nSize S\nLingkar dada 86 cm\nLebar bahu 35 cm\nPanjang lengan 31 cm\nLingkar lengan 39 cm\nPanjang 90 cm\nLingkar pinggang 80 cm\nLingkar pinggul 88 cm\n\nSize M\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 32 cm\nLingkar lengan 41 cm\nPanjang 90 cm\nLingkar pinggang 82 cm\nLingkar pinggul 92 cm\n\nSize L\nLingkar dada 96 cm\nLebar bahu 38 cm\nPanjang lengan 32 cm\nLingkar lengan 43 cm\nPanjang 92 cm\nLingkar pinggang 84 cm\nLingkar pinggul 97 cm\n\nSize XL\nLingkar dada 106 cm\nLebar bahu 40 cm\nPanjang lengan 33 cm\nLingkar lengan 47 cm\nPanjang 95 cm\nLingkar pinggang 89 cm\nLingkar pinggul 108 cm\n\nUkuran Sorabel\n\nModel Menggunakan Size M dan Warna Maroon\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/27bb44a0-efc6-4301-8c1f-3f2ec01cdfce'
              }
            ]
          }
        }
      ]
    }
  });

  await prisma.createCategory({
    name: 'Midi Dress',
    order: 2,
    pictureUrl:
      'https://imager-next.freetls.fastly.net/images/resized/480/assets-category-list/wanita_dress_mididress.jpg',
    products: {
      create: [
        {
          name: 'Shahaby Plain A Line Mini Dress',
          color: 'Black, Navy',
          material: 'Balotelli',
          price: 139000,
          purchaseCount: 1,
          size: 'L, XL',
          detail:
            'Detail : Resleting belakang, Tali pinggang',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/aada90ec-de7d-4658-ac9c-d028b119f325'
              },
            ]
          }
        },
        {
          name: 'Yussie Batik Bodycon Midi Dress',
          color: 'Brown, Black, Maroon',
          material: 'Cotton',
          price: 149000,
          purchaseCount: 1,
          size: 'L, XL',
          detail:
            'Bahan Katun Stretch\nResleting belakang',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/dcf8a7af-0cfd-48b0-8088-e9e3793786ad'
              },
            ]
          }
        },
        {
          name: 'Cherifa Stripes Bodycon Midi Dress',
          color: 'Cream',
          material: 'Cotton',
          price: 159000,
          purchaseCount: 1,
          size: 'L, M, S, XL',
          detail:
            'Resleting belakang',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/89cf0b6e-12f1-4f17-8702-cd870df22bba'
              },
            ]
          }
        },
        {
          name: 'Chooti Flowery Kerut Midi Dress',
          color: 'Satin',
          material: 'Cotton',
          price: 169000,
          purchaseCount: 1,
          size: 'L, M, S, XL',
          detail:
            'Resleting belakang',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/ccc44fb2-2954-4789-9efb-153188f8ff8e'
              },
            ]
          }
        },
        {
          name: 'Y&F Assil Plain Ruffle Midi Dress',
          color: 'Navy, Grey, Tosca, Dusty Pink, Black, Olive, Brown',
          material: 'Codoray',
          price: 179000,
          purchaseCount: 1,
          size: 'L, M, S, XL',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/3e57798b-c0d7-41e8-9f48-439b7f74c413'
              },
            ]
          }
        },
      ]
    }
  });

  await prisma.createCategory({
    name: 'Maxi Dress',
    order: 3,
    pictureUrl:
      'https://imager-next.freetls.fastly.net/images/resized/480/assets-category-list/wanita_dress_maxidress.jpg',
    products: {
      create: [
        {
          name: 'HALA Jossie Flowery Kerut Maxi Dress',
          color: 'Choco, Black, Maroon',
          material: 'Satin',
          price: 229000,
          purchaseCount: 1,
          size: 'L, XL',
          detail:
            'Resleting belakang, Pinggang karet full',
          sizeGuide:
            'Warna : Black ,Choco, Maroon, dan Navy (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 56 cm\nLingkar lengan 45 cm\nPanjang 137 cm\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 57 cm\nLingkar lengan 47 cm\nPanjang 137 cm\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 58 cm\nLingkar lengan 49 cm\nPanjang 138 cm\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 58 cm\nLingkar lengan 53 cm\nPanjang 140 cm\n\nUkuran Sorabel\n\nModel Menggunakan Size dan Warna : M dan Navy\nTinggi Model 172 CM\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/953c94c4-0dfc-4185-ba45-5bbacc122782'
              },
            ]
          }
        },
        {
          name: 'HALA Alee Plain Batwing Maxi Dress',
          color: 'Black, Navy, Khaki',
          material: 'Crepe',
          price: 272000,
          purchaseCount: 1,
          size: 'L, M, S, XL',
          detail:
            'Kancing belakang, Tali serut pinggang',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/14dbeca1-6bf5-4769-b920-993e5f357e68'
              },
            ]
          }
        },
        {
          name: 'Aneeqa Brukat Ribbon Maxi Dress',
          color: 'Dark Grey',
          material: 'Brukat',
          price: 219000,
          purchaseCount: 1,
          size: 'L',
          detail:
            'Resleting belakang',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/daa1f0a3-b10c-403d-bca4-577c04ad3342'
              },
            ]
          }
        },
        {
          name: 'Chooti Flowery Kerut Midi Dress',
          color: 'Satin',
          material: 'Cotton',
          price: 169000,
          purchaseCount: 1,
          size: 'L, M, S, XL',
          detail:
            'Resleting belakang',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/ccc44fb2-2954-4789-9efb-153188f8ff8e'
              },
            ]
          }
        },
        {
          name: 'Karlet Flowery Flare Maxi Dress',
          color: 'Blue, Choco, Salem',
          material: 'Polyester',
          price: 239000,
          purchaseCount: 1,
          size: 'L, M, S',
          sizeGuide:
            'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
          pictures: {
            create: [
              {
                pictureUrl:
                  'https://imager-next.freetls.fastly.net/images/resized/480/843324dd-00ee-4ff8-a6a4-8a07ad4fba37'
              },
            ]
          }
        },
      ]
    }
  });
}

main();
