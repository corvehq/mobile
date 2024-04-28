import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { billScreenStyle } from "../../../../styles/homeStyle";
import ChevronDownIcon from "../../../../assets/icons/ChevronDownIcon";
import TVPlanSheet from "../../../../components/bottomsheet/TVPlanSheet";

export const RenewPlan = ({
    amount,
    setAmount,
    decoderNumber,
    setDecoderNumber,
}: {
    amount: string;
    setAmount: any;
    decoderNumber: string;
    setDecoderNumber: any;
}) => {
    return (
        <>
            <View style={styles.billScreen.screenContent.formContent.inputDiv}>
                <Text style={styles.billScreen.screenContent.formContent.label}>
                    Decoder Number
                </Text>
                <TextInput
                    placeholder="Decoder Number"
                    value={decoderNumber}
                    style={styles.billScreen.screenContent.formContent.input}
                    onChangeText={(e) => setDecoderNumber(e)}
                />
            </View>

            <View style={styles.billScreen.screenContent.formContent.inputDiv}>
                <Text style={styles.billScreen.screenContent.formContent.label}>
                    Amount
                </Text>
                <TextInput
                    placeholder="Amount"
                    value={amount}
                    style={styles.billScreen.screenContent.formContent.input}
                    onChangeText={(e) => setAmount(e)}
                />
            </View>
        </>
    );
};

export const NewPlan = ({
    planList,
    setAmount,
    decoderNumber,
    setDecoderNumber,
    selectedPlan,
    setSelectedPlan,
}: {
    planList: any[];
    amount: string;
    setAmount: any;
    decoderNumber: string;
    setDecoderNumber: any;
    selectedPlan: any;
    setSelectedPlan: any;
}) => {
    const selectPlanSheet: any = useRef();

    return (
        <>
            <View style={styles.billScreen.screenContent.formContent.inputDiv}>
                <Text style={styles.billScreen.screenContent.formContent.label}>
                    Decoder Number
                </Text>
                <TextInput
                    placeholder="Decoder Number"
                    value={decoderNumber}
                    style={styles.billScreen.screenContent.formContent.input}
                    onChangeText={(e) => setDecoderNumber(e)}
                />
            </View>

            <View style={styles.billScreen.screenContent.formContent.inputDiv}>
                <Text style={styles.billScreen.screenContent.formContent.label}>
                    Select Plan
                </Text>
                <View
                    style={
                        styles.billScreen.screenContent.formContent
                            .selectInputView
                    }
                >
                    <Pressable
                        style={
                            styles.billScreen.screenContent.formContent
                                .selectInputView.selectInput
                        }
                        onPress={() => selectPlanSheet.current.open()}
                    >
                        <Text
                            style={
                                !selectedPlan.title
                                    ? styles.billScreen.screenContent
                                          .formContent.selectInputView
                                          .selectInput.text
                                    : {
                                          ...styles.billScreen.screenContent
                                              .formContent.selectInputView
                                              .selectInput.text,
                                          color: "#000000",
                                      }
                            }
                        >
                            {selectedPlan.title
                                ? selectedPlan.title
                                : " Select TV Plan"}
                        </Text>
                        <Pressable
                            style={{ marginLeft: "auto" }}
                            onPress={() => selectPlanSheet.current.open()}
                        >
                            <ChevronDownIcon />
                        </Pressable>
                    </Pressable>
                </View>
            </View>
            <TVPlanSheet
                setSelectedPlan={setSelectedPlan}
                selectPlanSheet={selectPlanSheet}
                planList={planList}
                setAmount={setAmount}
            />
        </>
    );
};

const styles = StyleSheet.create(billScreenStyle);
