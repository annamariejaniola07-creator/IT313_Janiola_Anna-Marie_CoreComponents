import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Student = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
};

const initialStudents: Student[] = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/100?img=2",
    flagged: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/100?img=3",
    flagged: false,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/100?img=4",
    flagged: false,
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=5",
    flagged: false,
  },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");

  const toggleFlag = (id: string) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student,
      ),
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase()),
  );

  const flaggedCount = students.filter((student) => student.flagged).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Student Directory</Text>
        <Text style={styles.subtitle}>Student Information and Advising</Text>
      </View>

      <View style={styles.totalContainer}>
        <View>
          <Text style={styles.totalLabel}>TOTAL STUDENTS</Text>
          <Text style={styles.totalNumber}>{students.length}</Text>
        </View>

        <View style={styles.flaggedSummary}>
          <Text style={styles.flaggedLabel}>FLAGGED</Text>
          <Text style={styles.flaggedNumber}>{flaggedCount}</Text>
        </View>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search student name..."
        placeholderTextColor="#C07894"
        value={query}
        onChangeText={setQuery}
      />

      <Text style={styles.listTitle}>Student List</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <View key={student.id} style={styles.studentCard}>
              <Image
                source={{ uri: student.photoUrl }}
                style={styles.studentImage}
              />

              <View style={styles.studentInfo}>
                <Text style={styles.studentName}>{student.name}</Text>

                <Text style={styles.studentYear}>{student.year}</Text>
              </View>

              <Pressable
                style={({ pressed }) => [
                  styles.flagButton,
                  student.flagged && styles.flaggedButton,
                  pressed && styles.pressedButton,
                ]}
                onPress={() => toggleFlag(student.id)}
              >
                <Text style={styles.star}>{student.flagged ? "★" : "☆"}</Text>

                <Text
                  style={[
                    styles.flagText,
                    student.flagged && styles.flaggedText,
                  ]}
                >
                  {student.flagged ? "Flagged" : "Flag"}
                </Text>
              </Pressable>
            </View>
          ))
        ) : (
          <Text style={styles.noResults}>No students found.</Text>
        )}
      </ScrollView>

      <Text style={styles.footer}>
        Showing {filteredStudents.length} of {students.length} students
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F8",
    padding: 20,
  },

  header: {
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#D63384",
  },

  subtitle: {
    fontSize: 13,
    color: "#B76E8B",
    marginTop: 5,
  },

  totalContainer: {
    backgroundColor: "#FCE0EB",
    padding: 18,
    borderRadius: 15,
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#AD1457",
  },

  totalNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#E91E63",
  },

  flaggedSummary: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 12,
  },

  flaggedLabel: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#AD1457",
  },

  flaggedNumber: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#E91E63",
  },

  searchInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F2B8CE",
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    color: "#663348",
    marginBottom: 20,
  },

  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C2185B",
    marginBottom: 12,
  },

  studentCard: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F8D5E2",
    elevation: 2,
  },

  studentImage: {
    width: 55,
    height: 55,
    borderRadius: 12,
  },

  studentInfo: {
    flex: 1,
    marginLeft: 12,
  },

  studentName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#8E2450",
  },

  studentYear: {
    fontSize: 13,
    color: "#B76E8B",
    marginTop: 4,
  },

  flagButton: {
    backgroundColor: "#FCE4EC",
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    minWidth: 68,
  },

  flaggedButton: {
    backgroundColor: "#E91E63",
  },

  pressedButton: {
    opacity: 0.7,
  },

  star: {
    fontSize: 20,
    color: "#E91E63",
  },

  flagText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#C2185B",
  },

  flaggedText: {
    color: "#FFFFFF",
  },

  noResults: {
    textAlign: "center",
    color: "#B76E8B",
    marginTop: 30,
    fontSize: 15,
  },

  footer: {
    textAlign: "center",
    color: "#B76E8B",
    fontSize: 12,
    paddingVertical: 12,
  },
});
