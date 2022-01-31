#include <SPI.h> // SPI
#include <MFRC522.h> // RFID
#define SS_PIN 10
#define RST_PIN 9

MFRC522 rfid(SS_PIN, RST_PIN); 

// Tableau contentent l'ID
byte nuidPICC[4];
void setup() {
  // initialize digital pin 13 as an output.
  Serial.begin(9600);

  // Init SPI bus
  SPI.begin(); 

  // Init MFRC522 
  rfid.PCD_Init();
}

// the loop function runs over and over again forever
void loop() {
 
  if ( !rfid.PICC_IsNewCardPresent())
    return;

  // Vérifier la présence d'un nouveau badge 
  if ( !rfid.PICC_ReadCardSerial())
    return;         
    
 for (byte i = 0; i < 4; i++) 
{
  nuidPICC[i] = rfid.uid.uidByte[i];
}

for (byte i = 0; i < 4; i++) 
{
  Serial.print(nuidPICC[i], HEX);
  Serial.print(" ");
}
Serial.println();
}
