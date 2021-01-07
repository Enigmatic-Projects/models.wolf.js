"use strict";

import {
  GenericSimple,
  Group,
  GroupAudioConfig,
  GroupAudioCounts,
  GroupBase,
  GroupExtended,
  SelectedCharm,
  Subscriber,
  SubscriberCharms,
  SubscriberExtended,
  IGenericSimple,
  IGroup,
  IGroupAudioConfig,
  IGroupAudioCounts,
  IGroupBase,
  IGroupExtended,
  ISelectedCharm,
  ISubscriber,
  ISubscriberCharms,
  ISubscriberExtended,
} from "../lib";

import expect from "expect.js";

describe("PropertiesDefined", () => {
  let tests = [
    { instance: new GenericSimple(), expected: ["Id", "Hash"] },
    {
      instance: new Group(),
      expected: ["Base", "Extended", "AudioConfig", "AudioCounts"],
    },
    {
      instance: new GroupAudioConfig(),
      expected: ["Id", "Enabled", "MinRepLevel", "StageId"],
    },
    {
      instance: new GroupAudioCounts(),
      expected: ["Id", "ConsumerCount", "BroadcasterCount"],
    },
    {
      instance: new GroupBase(),
      expected: [
        "Id",
        "Name",
        "Hash",
        "Description",
        "Reputation",
        "Premium",
        "Icon",
        "Members",
        "Official",
        "Peekable",
        "Owner",
      ],
    },
    {
      instance: new GroupExtended(),
      expected: [
        "Id",
        "Discoverable",
        "AdvancedAdmin",
        "Locked",
        "Questionable",
        "EntryLevel",
        "Passworded",
        "Language",
        "LongDescription",
        "Category",
      ],
    },
    {
      instance: new SelectedCharm(),
      expected: ["CharmId", "Position"],
    },
    {
      instance: new Subscriber(),
      expected: [
        "Id",
        "Hash",
        "Privileges",
        "Nickname",
        "Status",
        "Reputation",
        "Icon",
        "OnlineState",
        "DeviceType",
        "Charms",
        "Extended",
      ],
    },
    {
      instance: new SubscriberCharms(),
      expected: ["SelectedList"],
    },
    {
      instance: new SubscriberExtended(),
      expected: [
        "Name",
        "About",
        "Gender",
        "LookingFor",
        "Relationship",
        "Language",
        "Urls",
        "DateOfBirth",
        "UtcOffset",
      ],
    },
  ];

  tests.forEach((test) => {
    it(`${test.instance.constructor.name} Has Expected Properties`, () => {
      expect(Object.keys(test.instance)).to.eql(test.expected);
    });
  });
});
