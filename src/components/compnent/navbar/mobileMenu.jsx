import React from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";

const MobileMenuComponent = ({ Title, SubTitles, Links, onClose }) => {
  return (
    <Accordion collapseAll className="w-full">
      <Accordion.Panel>
        <Accordion.Title className="bg-transparent">{Title}</Accordion.Title>
        <Accordion.Content>
          <ul className="whitespace-nowrap text-left space-y-4 text-gray-600">
            {SubTitles.length > 0 ? (
              SubTitles.map((subTitle, index) => (
                <li key={index}>
                  <Link href={Links[index]} onClick={onClose}>
                    {subTitle}
                  </Link>
                </li>
              ))
            ) : (
              <li>
                <Link href={Links[0]} onClick={onClose}>
                  {Title}
                </Link>
              </li>
            )}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default MobileMenuComponent;
