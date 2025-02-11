import { yupResolver } from '@hookform/resolvers/yup'
import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { BackButton, FullScreenView, PrimaryButton, TextInput, TextMedium, TextRegular, UnlinkSpecsBottomSheet } from 'src/components'
import { spectaclesConnectSchema } from 'src/constants'
import { useSpecsLinkService } from 'src/services'
import { useSpecsBottomSheetAtom, useUserAtom } from 'src/store'
import { Colors, FontSizes, LineHeight } from 'src/themes'
import { dissmissKeyBoard, isIOS } from 'src/utilities'
import { AgreementForm } from './AgreementForm'
import { HeaderTabs, SpecsDataComponent } from './components'

const SpectaclesManageScreen = () => {
    const { user } = useUserAtom()
    const isSpecsConnected = !!user?.specsId
    const [agreementView, setAgreementView] = useState(!isSpecsConnected)
    const { handleService, isPending } = useSpecsLinkService();
    const [viewMode, setViewMode] = useState<'data' | 'settings'>(isSpecsConnected ? 'data' : 'settings')
    const { setBottomSheetVisible } = useSpecsBottomSheetAtom()

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(spectaclesConnectSchema),
    });


    const handleConnect = data => {
        handleService({
            username: data.username,
            unique_code: data.unique_code,
        })
        reset()
    };



    return (
        <Fragment>
            <FullScreenView>
                {(!agreementView) ?
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <BackButton iconSize={2} style={{ padding: RFValue(7) }} />
                            <TextMedium fontSize='sh2' numberOfLines={1}>
                                {'Spectacles'}
                            </TextMedium>
                        </View>
                        {isSpecsConnected && <HeaderTabs selectedTab={viewMode} setSelectedTab={setViewMode} />}
                        {viewMode === 'settings' ?
                            <TouchableWithoutFeedback onPress={dissmissKeyBoard}>
                                <View style={styles.subContainer}>
                                    {!isSpecsConnected ?
                                        <Fragment>
                                            <TextInput
                                                control={control}
                                                name="username"
                                                label={'Spectacles username'}
                                                placeholder='johndoe'
                                                editable={!isPending && !isSpecsConnected}
                                                maxLength={30}
                                                touched={!!errors?.username?.message}
                                                error={errors?.username?.message}
                                                autoCapitalize='none'
                                            />
                                            <TextInput
                                                control={control}
                                                name="unique_code"
                                                label={'Unqiue Code'}
                                                placeholder='XXXX'
                                                editable={!isPending && !isSpecsConnected}
                                                keyboardType='number-pad'
                                                maxLength={4}
                                                touched={!!errors.unique_code?.message}
                                                error={errors?.unique_code?.message}
                                            />
                                            <PrimaryButton
                                                title="Connect"
                                                buttonStyle={{ marginVertical: 0 }}
                                                onPress={handleSubmit(handleConnect)}
                                                disabled={isPending || !!isSpecsConnected}
                                                loading={isPending && !isSpecsConnected}
                                            />
                                        </Fragment>
                                        :
                                        <View style={styles.unlinkContainer}>
                                            <View style={styles.profileContainer}>
                                                <View style={styles.avatarContainer}>
                                                    <TextRegular style={styles.subTextStyle}>
                                                        {`spectacles`.charAt(0).toUpperCase()}
                                                    </TextRegular>
                                                </View>
                                                <TextRegular color='gray_900' fontSize='bt'>
                                                    {`@${user?.specsUsername ?? ''}`}
                                                </TextRegular>
                                            </View>
                                            <PrimaryButton
                                                buttonStyle={{ backgroundColor: Colors.danger, borderWidth: 0, marginVertical: 0 }}
                                                textStyle={{ color: Colors.white }}
                                                onPress={() => setBottomSheetVisible(true)}
                                                title="Unlink"
                                                shadowEnabled={false}
                                                loading={isPending}
                                            />
                                        </View>}
                                </View>
                            </TouchableWithoutFeedback>
                            : <SpecsDataComponent />}
                    </View>
                    : <AgreementForm handlePress={() => setAgreementView(false)} />
                }
            </FullScreenView>
            <UnlinkSpecsBottomSheet />
        </Fragment>
    )
}

export { SpectaclesManageScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: heightPercentageToDP(2),
    },
    subContainer: {
        marginVertical: heightPercentageToDP(3),
        paddingHorizontal: widthPercentageToDP(5),
    },
    unlinkContainer: {
        gap: heightPercentageToDP(1)
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: widthPercentageToDP(3),
        marginTop: heightPercentageToDP(isIOS ? 1 : 2),
        paddingHorizontal: widthPercentageToDP(5),
    },
    subTextStyle: {
        fontSize: FontSizes.h1,
        lineHeight: LineHeight.h1,
        marginVertical: heightPercentageToDP(0.5),
        color: Colors.white
    },
    profileContainer: {
        alignItems: 'center',
        gap: heightPercentageToDP(1),
        marginBottom: heightPercentageToDP(2)
    },
    avatarContainer: {
        width: widthPercentageToDP(30),
        height: widthPercentageToDP(30),
        borderRadius: widthPercentageToDP(30),
        backgroundColor: Colors.primary_500,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'

    }
})