import React from 'react'
import { StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { PrimaryButton, TextMedium, TextRegular, TextSemiBold, VirtualizedView } from 'src/components'
import { Colors, FontSizes, LineHeight } from 'src/themes'
import { NavigationService } from 'src/utilities'


interface Props {
    handlePress: () => void
}

const AgreementForm = ({ handlePress }: Props) => {

    return (
        <VirtualizedView style={styles.container}>
            <TextSemiBold fontSize='sh1' style={{ marginBottom: heightPercentageToDP(1) }} >
                SolarIDX - User Agreement
            </TextSemiBold>
            <TextRegular fontSize='sxt' color='gray_700'>
                Effective Date: Feb 2, 2025 {"\n"}Last Updated: Feb 2, 2025
            </TextRegular>

            <TextMedium style={styles.headerTextStyle}>1. Purpose of the Agreement</TextMedium>
            <TextRegular style={styles.subTextStyle}>
                SolarIDX allows users to connect their mobile application with Snap Spectacles using their Snap username and a unique 4-digit code set on the Spectacles.
            </TextRegular>

            <TextMedium style={styles.headerTextStyle}>2. User Registration & Data Linking</TextMedium>
            <TextRegular style={styles.subTextStyle}>
                • You must register on Spectacles and set a 4-digit code.
                {"\n"}•  Enter your Snap username and 4-digit code on the mobile app.
                {"\n"}•  If verified, your data will be linked.
            </TextRegular>

            <TextMedium style={styles.headerTextStyle}>3. Security & User Responsibility</TextMedium>
            <TextRegular style={styles.subTextStyle}>
                • Keep your 4-digit code confidential.
                {"\n"}•  If forgotten, reset it directly from Spectacles.
                {"\n"}•  Unauthorized access attempts may be blocked.
            </TextRegular>

            <TextMedium style={styles.headerTextStyle}>4. Limitations & Edge Cases</TextMedium>
            <TextRegular style={styles.subTextStyle}>
                • Registration must be completed on Spectacles before pairing.
                {"\n"}•  SolarIDX does NOT store Snap credentials.
                {"\n"}•  Feature availability is subject to app store policies.
            </TextRegular>

            <TextMedium style={styles.headerTextStyle}>5. Data Privacy & Compliance</TextMedium>
            <TextRegular style={styles.subTextStyle}>
                • Your data is NOT shared with third parties.
                {"\n"}•  You can unlink Spectacles anytime.
                {"\n"}•  We comply with GDPR & CCPA regulations.
            </TextRegular>

            {/* <TextMedium style={styles.headerTextStyle}>6. Step-by-Step Connection Guide</TextMedium>
            <TextRegular style={styles.subTextStyle}>
                Click on "How to Connect?" for step-by-step instructions.
            </TextRegular> */}

            <TextRegular style={[styles.subTextStyle, { marginTop: heightPercentageToDP(3) }]}>By proceeding, I agree that I have read and accept the User Agreement</TextRegular>
            <PrimaryButton
                title='Proceeed'
                onPress={handlePress}
                buttonStyle={styles.buttonStyle}
            />
            <PrimaryButton
                buttonStyle={[styles.buttonStyle, { backgroundColor: Colors.danger, borderWidth: 0, marginBottom: heightPercentageToDP(3) }]}
                textStyle={{ color: Colors.white }}
                onPress={() => NavigationService.goBack()}
                title="Cancel"
                shadowEnabled={false}
            />
        </VirtualizedView >
    )
}

export { AgreementForm }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: heightPercentageToDP(2),
        paddingHorizontal: widthPercentageToDP(5),
    },
    headerTextStyle: {
        fontSize: FontSizes.sh2,
        lineHeight: LineHeight.sh2,
        marginTop: heightPercentageToDP(1)
    },
    subTextStyle: {
        fontSize: FontSizes.sxt,
        lineHeight: LineHeight.sxt,
        marginVertical: heightPercentageToDP(0.5)
    },
    buttonStyle: {
        marginVertical: heightPercentageToDP(1),

    }
})