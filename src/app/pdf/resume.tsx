import {Document, Font, Link, Page, StyleSheet, Text, View} from "@react-pdf/renderer";
import {data, WithFullHeader, WithLiteHeader} from "../../config/data";

const UNIT = 8.0
const SPACING = 6.0
const HEADER_MARGIN = UNIT / 3

// Register font
Font.register({
    family: 'Calibri', fonts: [
      {src: "/fonts/calibri.ttf"}, // font-style: normal, font-weight: normal
      {src: "/fonts/calibrii.ttf", fontStyle: 'italic'},
      {src: "/fonts/calibrib.ttf", fontWeight: 'bold'},
      {src: "/fonts/calibriz.ttf", fontStyle: 'italic', fontWeight: 'bold'}
    ]
  }
);

// Disable hyphenation
Font.registerHyphenationCallback(word => [word]);

// Create styles
const colors = {
  header: "#450808",//"rgb(89,145,152)",//"#450808",
  headerBackground: "#E7D192",//"rgba(143, 13, 13,0.07)",//"#F2E8D7",
  headerUnderline: "#E7D192",
  highlight: "#8F0D0D",
  secondary: "#3a3a3a",
  body: "#595959",
}

const fonts = StyleSheet.create({
  page: {
    fontSize: 11,
  },
  header: {
    fontSize: UNIT * 1.75,
    lineHeight: 1
  },
  headerLarge: {
    fontSize: 20,
    lineHeight: 1
  },
  small: {
    fontSize: 10
  }
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Calibri',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'stretch',
    ...fonts.page,
    paddingVertical: 24,
    paddingHorizontal: 38,
    gap: UNIT,
  },
  // Source: https://stackoverflow.com/questions/64035774/how-to-do-word-wrap-with-react-pdf
  textWrap: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    flexBasis: 0,
  },
});

function ItemHeaderFullSmall(header: WithFullHeader & { skipMargin?: boolean }) {
  const dateFromFormatted = header.dateFrom.toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
  const dateToFormatted = header.dateTo?.toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) ?? 'Present';

  const {skipMargin = false} = header;

  return (
    <View style={{
      marginBottom: skipMargin ? 0 : HEADER_MARGIN
    }}>
      <View>
        <Text style={{fontWeight: "bold"}}>
          {header.title}
        </Text>
        <Text style={{}}>
          {header.name}
        </Text>
      </View>
      <View style={{
        ...fonts.small,
        color: colors.secondary,
      }}>
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

function ItemHeaderFull(header: WithFullHeader & { skipMargin?: boolean }) {
  const dateFromFormatted = header.dateFrom.toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
  const dateToFormatted = header.dateTo?.toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) ?? 'Present';

  const {skipMargin = false} = header;

  return (
    <View style={{
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: skipMargin ? 0 : HEADER_MARGIN
    }}>
      <View>
        <Text style={{fontWeight: "bold", color: colors.highlight}}>
          {header.title}
        </Text>
        <Text style={{fontWeight: "bold"}}>
          {header.name}
        </Text>
      </View>
      <View style={{display: "flex", flexDirection: "column", alignItems: "flex-end",}}>
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

function ItemHeaderLite(header: WithLiteHeader & { skipMargin?: boolean }) {
  const {skipMargin = false} = header;

  return (
    <View style={{
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: skipMargin ? 0 : HEADER_MARGIN
    }}>
      <View>
        <Text style={{fontWeight: "bold", color: colors.highlight}}>
          {header.title}
        </Text>
        {!!header.name &&
            <Text style={{
              // ...fonts.small,
              // color: colors.secondary
              fontWeight: "bold",
            }}>
              {header.name}
            </Text>
        }
      </View>
    </View>
  )
}

function Header({children}: { children: React.ReactNode }) {
  return <View style={{
    width: "100%",
    marginBottom: SPACING,
  }}>
    <Text
      style={{
        fontWeight: "bold",
        textAlign: "left",
        ...fonts.header,
        color: colors.header,
        backgroundColor: colors.headerBackground,
        padding: UNIT / 2,
        marginHorizontal: -UNIT / 2,
        borderRadius: UNIT / 4,
        // borderTopLeftRadius: UNIT / 4,
      }}>
      {children}
    </Text>
    {/*<View style={{backgroundColor: colors.headerUnderline, height: 2}}/>*/}
  </View>
}

export function Point({children}: { children: React.ReactNode }) {
  return <View
    style={{
      flexDirection: 'row',
      gap: UNIT / 2,
      textAlign: "justify",
      color: colors.body,
      ...fonts.small,
    }}>
    <Text style={{
      fontSize: 10
    }}>
      •
    </Text>
    <Text style={styles.textWrap}>
      {children}
    </Text>
  </View>
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
          gap: SPACING,
          width: '100%'
        }}>
          <View style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "100%",
          }}>
            <Text style={{
              fontWeight: "bold",
              ...fonts.headerLarge,
              color: colors.header
            }}>
              {data.introduction.name}
            </Text>
            <Text style={{
              ...fonts.header
            }}>
              Software Engineer @ JetBrains
            </Text>
          </View>
          <View style={{width: "100%", height: 0.5, backgroundColor: "black"}}/>
          <View style={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: SPACING,
          }}>
            <Text>{email ?? "---"}</Text>
            <Text>•</Text>
            <Text>{numberFormatted ?? "---"}</Text>
            <Text>•</Text>
            <Text>{data.introduction.city}</Text>
            <Text>•</Text>
            <Text>
              <Link src="https://www.linkedin.com/in/jakub-dobry/"
                    style={{color: "inherit", textDecoration: "none"}}>
                linkedin.com/in/jakub-dobry
              </Link>
            </Text>
          </View>
        </View>
        <View>
          <Text style={{textAlign: "justify"}}>
            <Text style={{fontWeight: "bold"}}>Software Engineer with 9+ years of experience.</Text> Quickly learning
            new technologies and new approaches.
            Problem-solving, passion for detail, and critical thinking. Solid decision-making under pressure.
            Able to communicate and work in a team or lead it. Focused on self-improvement, structured and organized
            work.
          </Text>
        </View>
        <View style={{display: "flex", flexDirection: "row", gap: UNIT * 2}}>
          <View style={{
            width: "60%",
            gap: SPACING,
          }}>
            <View>
              <Header>
                Samples of Work
              </Header>
              <View style={{
                flexDirection: 'column',
                gap: SPACING,
              }}>
                <View>
                  <ItemHeaderLite
                    title="Undisclosed Project"
                    name="JetBrains"
                  />
                  <View style={{marginLeft: UNIT / 2}}>
                    <Point>Building new product from the beginning, including frontend, backend, project setup,
                      infrastructure.</Point>
                    <Point>Taking initiative in important technical decisions.</Point>
                    <Point>
                      Technologies: TypeScript, Next.js, Node.js, Firebase, and LLMs.
                    </Point>
                    <Point>
                      Used Kotlin and Kotlin/JS with React.js, Ktor, and Exposed for 2 years.
                    </Point>
                  </View>
                </View>
                <View>
                  <ItemHeaderLite
                    title="Infrastructure Management"
                    name="QPlay.cz"
                  />
                  <View style={{marginLeft: UNIT / 2}}>
                    <Point>
                      Created tools to manage distributed Minecraft server across 10+ virtual machines.
                    </Point>
                    <Point>
                      Examples of functionality: distributing server images, logs collection, servers management,
                      monitoring, and management portal.
                    </Point>
                    <Point>
                      Technologies: Java, Kotlin, Kubernetes, Docker, and Bash.
                    </Point>
                  </View>
                </View>
                <View>
                  <ItemHeaderLite
                    title="Minecraft Plugins"
                    name="QPlay.cz"
                  />
                  <View style={{marginLeft: UNIT / 2}}>
                    <Point>
                      Created various Minecraft plugins, for example: permissions system, universal database connection
                      API, security system, and minigames.
                    </Point>
                    <Point>
                      Technologies: Java, Kotlin, Spigot API, and PostgreSQL.
                    </Point>
                  </View>
                </View>
                <View>
                  <ItemHeaderLite
                    title="gRPCFlair"
                  />
                  <View style={{marginLeft: UNIT / 2}}>
                    <Point>
                      Created a tool to help understand gRPC communication as part of my master&#39;s thesis.
                    </Point>
                    <Point>
                      Technologies: Typescript, Next.js, and gRPC.
                    </Point>
                  </View>
                </View>
                <View>
                  <ItemHeaderLite
                    title="ESTIMAS"
                    name="net-inout s.r.o."
                  />
                  <View style={{marginLeft: UNIT / 2}}>
                    <Point>
                      Created front end part of the ESTIMAS software, including features like time tracking, attendance
                      and user management.
                    </Point>
                    <Point>
                      Technologies: JavaScript, Vue.js, and Nuxt.js.
                    </Point>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Header>
                Experience
              </Header>
              <View style={{
                flexDirection: 'column',
                gap: SPACING,
              }}>
                {data.experiences.map((experience) => (
                  <View key={experience.title}>
                    <ItemHeaderFull {...experience}/>
                    <View style={{marginLeft: UNIT / 2}}>
                      {experience.pointsShort?.map((point) => (
                        <Point key={point}>
                          {point}
                        </Point>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={{
            width: "40%",
            gap: SPACING,
          }}>
            <View>
              <Header>
                Skills
              </Header>
              <View style={{
                display: "flex",
                flexDirection: "column",
                gap: SPACING / 2
              }}>
                {[
                  data.skills[3],
                  data.skills[0],
                  data.skills[1],
                  data.skills[2],
                  {name: "Languages", skills: data.introduction.languages},
                  // {
                  //   name: "Interests",
                  //   skills: data.introduction.interests
                  // }
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
                    <Text style={{
                      color: colors.body,
                      ...fonts.small,
                    }}>
                      {category.skills.map(it => `${it.name}${it.level && category.name === "Languages" ? ` [${it.level}]` : ""}`).join(", ")}
                    </Text>
                  </Text>
                ))}
              </View>
            </View>
            <View>
              <Header>
                Awards
              </Header>
              <View style={{
                flexDirection: 'column',
                gap: SPACING,
              }}>
                {data.awards.map((award, index) => (
                  <View key={index}>
                    <ItemHeaderFullSmall {...award} />
                    <View style={{color: colors.body, ...fonts.small}}>
                      {award.additionalInfo?.split("\n")?.map((point) => (
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
              <Header>
                Education
              </Header>
              <View style={{
                flexDirection: 'column',
                gap: SPACING,
              }}>
                {data.educations.map((education, index) => (
                  <View key={index}>
                    <ItemHeaderFullSmall {...education} />
                    <View style={{color: colors.body, ...fonts.small}}>
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
          </View>
        </View>
      </Page>
    </Document>
  )
}