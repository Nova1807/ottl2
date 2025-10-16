import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

type ContactChipProps = {
  label: string;
  value: string;
};

const ContactChip: React.FC<ContactChipProps> = ({ label, value }) => (
  <View style={styles.chip}>
    <Text style={styles.chipLabel}>{label}</Text>
    <Text style={styles.chipValue}>{value}</Text>
  </View>
);

type CardProps = {
  children: React.ReactNode;
  style?: object;
};

const Card: React.FC<CardProps> = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

export default function BusinessCardApp() {
  const { width } = useWindowDimensions();
  const isWide = width > 400;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Card style={[isWide ? styles.row : styles.column]}>
          {/* Lokales Bild (ersetze den Pfad durch dein eigenes Bild in /assets) */}
          <Image
            source={require('./assets/profile.jpg')}
            style={styles.avatar}
          />

          <View style={styles.infoContainer}>
            <Text style={styles.name}>Erik Hauer</Text>
            <Text style={styles.role}>Schüler</Text>
            <Text style={styles.company}>HTL Donaustadt</Text>

            <View style={styles.contactChips}>
              <ContactChip label="Phone" value="+43 677 612 99819" />
              <ContactChip label="Email" value="erik.hauer@outlookde" />
              <ContactChip label="Website" value="https://www.htl-donaustadt.at/home" />
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 500,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
    textAlign: 'center',
  },
  company: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 12,
    textAlign: 'center',
  },
  contactChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  chip: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    minWidth: 120,
    alignItems: 'center',
  },
  chipLabel: {
    fontWeight: '600',
    color: '#374151',
  },
  chipValue: {
    color: '#6b7280',
    fontSize: 13,
  },
});
