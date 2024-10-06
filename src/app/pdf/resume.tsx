// Register font
import {Document, Font, Link, Page, StyleSheet, Text, View} from "@react-pdf/renderer";
import {data, WithHeader} from "../../config/data";
import * as React from "react";

Font.register({
    family: 'Calibri', fonts: [
      {src: "/fonts/calibri.ttf"}, // font-style: normal, font-weight: normal
      {src: "/fonts/calibrii.ttf", fontStyle: 'italic'},
      {src: "/fonts/calibrib.ttf", fontWeight: 'bold'},
      {src: "/fonts/calibriz.ttf", fontStyle: 'italic', fontWeight: 'bold'}
    ]
  }
);

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Calibri',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'stretch',
    fontSize: 11,
    padding: 24,
    gap: 16,
  },
});

function SectionHeaderPdf(header: WithHeader & { skipMargin?: boolean }) {
  const dateFromFormatted = header.dateFrom.toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
  const dateToFormatted = header.dateTo?.toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) ?? 'Present';

  const {skipMargin = false} = header;

  return (
    <View style={{
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: skipMargin ? 0 : 10
    }}>
      <View>
        <Text style={{fontWeight: "bold"}}>
          {header.title}
        </Text>
        <Text style={{fontWeight: "bold"}}>
          {header.name}
        </Text>
      </View>
      <View style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
        <Text>
          {header.location}
        </Text>
        <Text>
          {dateFromFormatted} - {dateToFormatted}
        </Text>
      </View>
    </View>
  )
}

interface ResumeDocumentProps {
  email?: string,
  phone?: string,
}

export const ResumeDocument = ({email, phone}: ResumeDocumentProps) => {
  const numberFormatted = phone?.replace(/\D/g, '')?.replace(/^420(\d{3})(\d{3})(\d{3})$/, '+420 $1 $2 $3');

  return (
    <Document title="Jakub Dobry - Resume">
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={{
          display: "flex",
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'center',
          gap: 8,
          width: '85%'
        }}>
          <Text style={{fontWeight: "bold"}}>
            {data.introduction.name}
          </Text>
          <View style={{width: "100%", border: "0.5px solid black"}}/>
          <Text>
            {email ?? "---"} • {numberFormatted ?? "---"} • {data.introduction.city} •{" "}
            <Link src="https://www.linkedin.com/in/jakub-dobry/"
                  style={{color: "inherit", textDecoration: "inherit"}}>linkedin.com/in/jakub-dobry</Link>
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: "bold", textAlign: "center"}}>
            Experience
          </Text>
          <View style={{
            flexDirection: 'column',
            gap: 8,
          }}>
            {data.experiences.map((experience) => (
              <View key={experience.title}>
                <SectionHeaderPdf {...experience}/>
                <View style={{marginLeft: 12}}>
                  {experience.points.map((point) => (
                    <View key={point} style={{flexDirection: 'row', gap: 2}}>
                      <Text style={{
                        fontSize: 14,
                      }}>
                        •
                      </Text>
                      <Text>
                        {point}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
        {/*<View>
        <Text style={{fontWeight: "bold", textAlign: "center"}}>
          Leadership & Activities
        </Text>
        <View style={{
          flexDirection: 'column',
          gap: 8,
        }}>
          {data.experiences.slice(1, 2).map((experience) => (
            <View key={experience.title}>
              <SectionHeaderPdf {...experience}/>
              <View style={{marginLeft: 12}}>
                {experience.points.map((point) => (
                  <View key={point} style={{flexDirection: 'row', gap: 2}}>
                    <Text style={{
                      fontSize: 14,
                    }}>
                      •
                    </Text>
                    <Text>
                      {point}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>*/}
        <View>
          <Text style={{fontWeight: "bold", textAlign: "center"}}>
            Education
          </Text>
          <View style={{
            flexDirection: 'column',
            gap: 8,
          }}>
            {data.educations.map((education, index) => (
              <View key={index}>
                <SectionHeaderPdf {...education} skipMargin/>
                <View>
                  {education.additionalInfo?.split("\n")?.map((point) => (
                    <Text key={point}>
                      {point.trim()}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={{fontWeight: "bold", textAlign: "center"}}>
            Skills & Interests
          </Text>
          <View>
            {[
              ...data.skills,
              {name: "Languages", skills: data.introduction.languages},
              {
                name: "Interests",
                skills: data.introduction.interests
              }
            ].map((category) => (
              <Text key={category.name}>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                  wrap={false}
                >
                  {category.name}:&nbsp;
                </Text>
                <Text>
                  {category.skills.map(it => `${it.name}${it.level ? ` [${it.level}]` : ""}`).join(", ")}
                </Text>
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  )
}